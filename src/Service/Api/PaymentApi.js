import { RatayoApi } from "./ApiQuery"

const PaymentApi = RatayoApi.injectEndpoints({
    endpoints:(builder)=>({
        GetStripePK:builder.query({
            query:()=>"/payment"
        }),
        CreatePaymentIntent:builder.mutation({
            query:(data)=>({
                url:"/payment/checkout",
                method:"POST",
            })
        })
    })
})

export const {useGetStripePKQuery,useCreatePaymentIntentMutation} = PaymentApi