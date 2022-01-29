import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const committeesDirectory = path.join(process.cwd(), 'committees')

export function getCommitteesData() {
    const fileNames = fs.readdirSync(committeesDirectory)
    const allCommitteesData = fileNames.map(fileName => {
        const id = fileName.replace(/\.md$/, '')

        const fullPath = path.join(committeesDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        const matterResult = matter(fileContents)

        return {
            id,
            ...matterResult.data
        }
    })

    return allCommitteesData
}