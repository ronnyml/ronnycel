import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const routes = ["/", "/about", "/projects", "/services", "/blog"];

for (const route of routes) {
  test(`${route} renders accessibly without overflow`, async ({ page }) => {
    const response = await page.goto(route, { waitUntil: "networkidle" });
    expect(response?.ok()).toBeTruthy();
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator("main")).toBeVisible();
    await expect(page.locator("footer")).toBeVisible();

    const overflows = await page.evaluate(
      () =>
        document.documentElement.scrollWidth >
        document.documentElement.clientWidth,
    );
    expect(overflows).toBeFalsy();

    const accessibility = await new AxeBuilder({ page }).analyze();
    expect(accessibility.violations).toEqual([]);
  });
}

test("mobile navigation supports keyboard dismissal", async ({
  page,
  isMobile,
}) => {
  test.skip(!isMobile, "Mobile-only behavior");
  await page.goto("/about");
  const menu = page.getByRole("button", { name: "Open navigation menu" });
  await menu.click();
  await expect(
    page.getByRole("navigation", { name: "Mobile navigation" }),
  ).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(
    page.getByRole("navigation", { name: "Mobile navigation" }),
  ).toBeHidden();
  await expect(menu).toBeFocused();
});

test("blog renders server-loaded posts and opens an article", async ({
  page,
}) => {
  await page.goto("/blog", { waitUntil: "networkidle" });
  const firstPost = page.locator("article a").first();
  await expect(firstPost).toBeVisible();
  await firstPost.click();
  await expect(
    page.getByRole("link", { name: /Back to writing/i }),
  ).toBeVisible();
  await expect(page.locator(".article-content")).not.toBeEmpty();
  await expect(page.locator(".article-content script")).toHaveCount(0);
  for (const image of await page.locator(".article-content img").all()) {
    await image.scrollIntoViewIfNeeded();
  }
  await expect
    .poll(() =>
      page
        .locator(".article-content img")
        .evaluateAll(
          (images) =>
            images.filter(
              (image) =>
                !(image as HTMLImageElement).complete ||
                (image as HTMLImageElement).naturalWidth === 0,
            ).length,
        ),
    )
    .toBe(0);
});
