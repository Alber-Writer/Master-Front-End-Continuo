export interface OrderDetails {
    readonly detailId: string
    detailDescription: string
    price: number
    detailIsAccomplished: boolean
}

export interface Order {
  readonly orderId: `${string}_${string}`;
  readonly providerName: string
  readonly date: string
  isSentToProvider: boolean
  details: OrderDetails[]
}
