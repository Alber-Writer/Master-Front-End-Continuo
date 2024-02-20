export interface IDetailTask {
  readonly detailId: string
  detailDescription: string
  price: number
  isCompleted: boolean
}

export interface IBasicInfo {
  readonly orderId: string
  readonly providerName: string
  readonly date: string
  isSentToProvider: boolean
}

export interface IDetailsTaskList {
  details: IDetailTask[]
}

export type IOrder = IBasicInfo & IDetailsTaskList
