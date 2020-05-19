import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content");

export function getContentData() {
  // Get file names under /content
  const fileNames = fs.readdirSync(postsDirectory);
  const allContentData = fileNames.map(async (fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    console.log(id);
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    const htmlContent = await getContent(fileName);
    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
      htmlContent,
    };
  });
  // Sort posts by date
  return allContentData;
}

export async function getContent(id) {
  console.log(id);
  const fullPath = path.join(postsDirectory, id);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    contentHtml,
  };
}
