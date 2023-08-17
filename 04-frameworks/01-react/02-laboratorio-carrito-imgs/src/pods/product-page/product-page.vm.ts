export interface PictureEntityVM {
  id: string,
  picUrl: string,
  title: string
}

export interface PictureEntityCheckedVM extends PictureEntityVM{
  selected: boolean
}