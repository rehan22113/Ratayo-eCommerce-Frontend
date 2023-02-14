import { RatayoApi } from "./ApiQuery";


const CategoryApi = RatayoApi.injectEndpoints({
    endpoints:builder=>({
       GetCategories:builder.query({
        query:()=>`/category`
       }),
       GetSingleCategory:builder.mutation({
            query:(id)=>({
                url:`/category/?categoryId${id}`,
                method:"GET",
            })
       }),
       AddNewCategory:builder.mutation({
            query:(data)=>({
                url:"/category",
                method:"POST",
                body:data
            })
       }),
       EditCategory:builder.mutation({
            query:(data)=>{
                return ({
                url:`/category/${data.cId}`,
                method:"PATCH",
                body:{
                    parent:data.rId
                }
            })}
       }),
       DeleteCategory:builder.mutation({
        query:(id)=>({
            url:`/category/${id}`,
            method:"DELETE"
        })
       })
    })
})

export const {useGetCategoriesQuery,useEditCategoryMutation,useGetSingleCategoryMutation,useAddNewCategoryMutation,useDeleteCategoryMutation} = CategoryApi