export interface PictureEntityVM {
  id: string,
  picUrl: string,
  title: string
  price: number
}

export interface PictureEntityCheckedVM extends PictureEntityVM{
  selected: boolean
}