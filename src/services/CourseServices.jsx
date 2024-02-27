// <---------post method=-------------->

import AxiosInstances from './../axiosInstances/axiosInstances'

const CourseServices = {
    createService: async payload =>{
        await AxiosInstances.post('/courses' , payload)
    },
    fetchService: async ()=>{
        let {data} = await AxiosInstances.get('/courses')
        return data ;
        // await AxiosInstances.get('/courses');

    },
    updateService: async (id,payload)=>{
        await AxiosInstances.put(`/courses/${id}`, payload);
    },
    deleteService: async id=>{
        await AxiosInstances.delete(`/courses/${id}`)
    },
    fetchId: async id=>{
        let{data} =  await AxiosInstances.get(`/courses/${id}`)
        return data;
    }
}

export default CourseServices;