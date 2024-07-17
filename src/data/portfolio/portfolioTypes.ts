export type PortfolioItemType = {
  id: string
  majorProject: boolean
  type: string
  title: string
  pics: string[]
  fr: {
    shortDescription: string
    pics_titles: string[]
    fullDescription: string[]
    skills: string[]
  }
  en: {
    shortDescription: string
    pics_titles: string[]
    fullDescription: string[]
    skills: string[]
  }
  stacks: string[]
}