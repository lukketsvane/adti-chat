import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const docsDirectory = path.join(process.cwd(), 'docs');

export type Doc = {
  content: string;
  data: matter.GrayMatterFile<string>['data'];
  filePath: string;
};

export function getDocBySlug(slug: string[]): Promise<Doc> {
  const fullPath = path.join(docsDirectory, `${slug.join('/')}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return { data, content, filePath: `/docs/${slug.join('/')}` };
}

export function getAllDocs(): Doc[] {
  function getFiles(dirPath: string, arrayOfFiles: string[] = []): string[] {
    const files = fs.readdirSync(dirPath);

    files.forEach((file) => {
      if (fs.statSync(`${dirPath}/${file}`).isDirectory()) {
        arrayOfFiles = getFiles(`${dirPath}/${file}`, arrayOfFiles);
      } else {
        arrayOfFiles.push(path.join(dirPath, '/', file));
      }
    });

    return arrayOfFiles;
  }

  const docFiles = getFiles(docsDirectory);

  const docs = docFiles.map((filePath) => {
    const slug = filePath
      .replace(docsDirectory, '')
      .replace('.md', '')
      .split(path.sep)
      .slice(1);
    return getDocBySlug(slug);
  });

  return docs;
}
