import axios, { Axios } from "axios";
import React, { useEffect, useState } from 'react'
import { BarChart,XAxis,YAxis,Tooltip,Bar,Legend,CartesianGrid } from "recharts";

function Phones() {
    const [phones,setPhones] = useState([]);

    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data => setPhones(data.data))
        
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const phoneData = data.data.data;
            const phonesWithFakeData = phoneData.map(phone =>{
                const obj = {
                    name: phone.phone_name,
                    price: parseInt(phone.slug.split('-')[1])
                }
                return obj;
            })
            setPhones(phonesWithFakeData)
            console.log(phonesWithFakeData)
        });

    },[])

  return (
    <div>
        <h2 className='text-5xl'>Phones:{phones.length}</h2>
        <BarChart width={600} height={400} data={phones}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis dataKey="price"/>
            <Tooltip />
            <Legend />
            <Bar dataKey="price" fill="#8884d8" />
            <Bar dataKey="name" fill="#82ca9d" />
        </BarChart>
    </div>
  )
}

export default Phones