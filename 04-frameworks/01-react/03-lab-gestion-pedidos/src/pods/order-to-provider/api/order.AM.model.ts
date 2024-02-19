export interface AMOrder {
  orderId: string
  providerName: string
  date: string
  isSentToProvider: boolean
  details: AMDetails[]
}

export interface AMDetails {
  detailId: string
  detailDescription: string
  price: number
  isCompleted: boolean
}
