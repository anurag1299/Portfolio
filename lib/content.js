import fs from "fs";
import path from "path";
import recursive from "recursive-readdir";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content");

export function getContent() {
  const fileNames = walkSync(postsDirectory.concat("/"));

  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");
    const id2 = id.replace(postsDirectory, "");
    //console.log(id);
    //const data = getContentData(id);
    return id2;
  });

  return allPostsData;
}

const walkSync = function (dir, filelist) {
  var fs = fs || require("fs"),
    files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function (file) {
    if (fs.statSync(dir + file).isDirectory()) {
      filelist = walkSync(dir + file + "/", filelist);
    } else {
      //console.log(dir + file);
      filelist.push(dir + file);
    }
  });
  return filelist;
};

export async function getContentData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  //console.log(fullPath);
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
    id,
    contentHtml,
    ...matterResult.data,
  };
}
