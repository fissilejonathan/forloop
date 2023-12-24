import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";

export async function GET(context) {
  const posts = await getCollection("link");
  const items = posts.map((post) => {
    let item = {
      ...post.data,
    };

    if (post.data.type !== "link") {
      item.link = `/blog/${post.slug}/`;
    } else {
      item.link = post.data.url;
    }

    item.categories = post.data.tags;

    return item;
  });

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: items,
  });
}
