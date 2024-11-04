import { Country } from "./countries"
import { Region } from "./region.type"

export interface CacheInterface{
  byCapital:TermCountries
  byCountries:TermCountries
  byRegion:RegionCountries
}

export interface TermCountries{
    term:string
    countries:Country[]
}

export interface RegionCountries{
  region:Region
  countries:Country[]
}
