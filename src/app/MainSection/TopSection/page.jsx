'use client'

import Image from 'next/image';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { TrendingUp } from 'lucide-react';

ChartJS.register(ArcElement, Tooltip, Legend);



export default function Page() {

  const progress = 85;
  const progressData = {
    datasets: [
      {
        data: [progress, 100 - progress],
        backgroundColor: ['#36A2EB', '#e5e5e5'], // Blue and light gray
        borderWidth: 0,
        cutout: '80%',
      },
    ],
  };
  const progressOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
  };


  // steps Completed Array
  const stepsCompletedArray = ['Profile Setup', 'Initial Training', 'Legal Documents'];

  // Steps Remaining Arry
  const stepsRemainingArray = ['Financial Integration', 'Final Review'];
  const franchiseesStages = [
    {stageName: "Stage 1 (Initial Inquiry)", bgColor: "#1F7EAA", stageNo: 2},
    {stageName: "Stage 2 (Document Submission)", bgColor: "#2FBDFF", stageNo: 7},
    {stageName: "Stage 2 (Document Submission)", bgColor: "#97DEFF", stageNo: 5},
 ]

  // Steps Remaining avatars Array
 const avatars = [
  'olivia_rhye.png',
  'phoenix_barker.png',
  'lana_steiner.png',
  'demi_wilkinson.png',
  'candice_wu.png',
];

// Prospect Leads Array

const prospectLeads = [
  {logo: "leadAvatar1.png", name: "Wade Warren", stage: "Stage: Initial Inquiry"},
  {logo: "leadAvatar2.png", name: "Ava Wright", stage: "Stage: Initial Inquiry"},
  {logo: "leadAvatar3.png", name: "Cody Fisher", stage: "Stage: Initial Inquiry"}
]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 p-6 gap-8 border-b border-gray-200">

      {/* Account Progress Card */}
      <div className="bg-white rounded-2xl w-full h-full  border border-gray-300">
        <h2 className="text-xl font-bold mt-2 mb-7 text-center">Account Progress</h2>
        <div className="flex flex-col items-center justify-center h-44 relative border-b-2 border-gray-300">
          <Doughnut className=" mb-8" data={progressData} options={progressOptions} />
          <div className="absolute text-2xl font-bold text-center mb-9">{progress}%</div>
        </div>

        <div className='bg-[#F6F7FB] p-3 mt-5 rounded-md'>
          <h3 className="text-sm font-semibold mb-2">Steps Completed</h3>
          <ul className="space-y-3">
            {stepsCompletedArray.map((step, id) => (
              <li key={id} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="h-2 w-2 rounded-full bg-gray-300" />
                  <span className="text-sm font-medium text-gray-800">
                    {step}
                  </span>
                </div>
                <div>
                  <span className="h-5 w-5 rounded-full bg-green-500 text-white text-xs flex items-center justify-center">
                    ✓
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className='bg-[#F6F7FB] p-3 mt-5 rounded-md'>
          <h3 className="text-sm font-semibold mb-2">Steps Remaining</h3>
          <ul className="space-y-3">
            {stepsRemainingArray.map((step, id) => (
              <li key={id} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="h-2 w-2 rounded-full bg-gray-300" />
                  <span className="text-sm font-medium text-gray-800">
                    {step}
                  </span>
                </div>
                <div>
                  <span className="h-5 w-5 rounded-full bg-green-200 text-white text-xs flex items-center justify-center">
                    ✓
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
       
       <div className='flex flex-col gap-5'>
       {/* Total franchisees Onboard */}
      <div className='bg-white p-4 rounded-2xl w-full h-full border border-gray-200'>
        <h3 className='text-xl font-bold mt-2 mb-4'>Total Franchisees Onboard</h3>  
        <div className='flex justify-between'>
          <div className='flex items-center gap-4'>
            <p className='text-3xl font-bold'>14</p>
            <div className='flex gap-1 border-2 border-green-700 rounded-4xl px-2  text-green-700'><TrendingUp className='w-3 '/><span>7.4%</span></div>
          </div> 
          <div className="flex items-center">
      {avatars.map((avatar, index) => (
        <img
          key={index}
          src={`avatars/${avatar}`}
          alt="avatar"
          className="w-8 h-8  rounded-full border-2 border-white -ml-3 first:ml-0"
        />
      ))}
      <div className="w-8 h-8 rounded-full border-2 border-white -ml-2 first:ml-0 bg-gray-200 flex items-center justify-center text-sm text-gray-600">
        +7
      </div>
    </div>
        </div>
        <div className='flex gap-2 my-5'>
          <div className='h-[12px] w-[100px] bg-[#1F7EAA] rounded-sm'></div>
          <div className='h-[12px] w-[76px] bg-[#2FBDFF] rounded-sm'></div>
          <div className='h-[12px] w-[146px] bg-[#97DEFF] rounded-sm'></div>
        </div>

        <ul className="space-y-3">
            {franchiseesStages.map((stage, id) => (
              <li key={id} className="flex items-center justify-between">
                 <div className="flex items-center space-x-2">
                  <span className="h-2.5 w-2.5 rounded-sm"  style={{ backgroundColor: stage.bgColor }}/>
                  <span className="text-[14px] text-gray-600">
                    {stage.stageName}
                  </span>
                </div>
                <div>
                  <span className=" text-lg font-bold flex items-center justify-center">
                  0{stage.stageNo}
                  </span>
                </div>
              </li>
            ))}
          </ul>
      </div>
      
      {/* Financial Wellbeing */}
      <div className='bg-white p-4 rounded-2xl w-full h-full border border-gray-200'>
        <h3 className='text-xl font-bold mt-2  '>Financial Wellbeing</h3>  
        <div className='flex items-center justify-between border-b border-gray-300 py-4'>
            <p className='flex flex-col'><span className='text-3xl font-bold'>20</span><span className='text-[#475467]'>Total Franchisees</span></p>
            <div className='flex gap-1 border-2 border-green-700 rounded-4xl px-2  text-green-700'><TrendingUp className='w-3 '/><span>2.1%</span></div>
        </div>
        <div className='flex gap-4 p-5 h-[102px] w-[161px]'>
            <div className='flex flex-col justify-center items-center gap-3 bg-[#F6F7FB] sm:px-9 sm:py-12 py-10 px-7'>
               <p className='font-[#455468]'>Target</p>
               <h3 className='font-bold text-xl'>$500,000</h3>
            </div>

            <div className='flex flex-col justify-center items-center gap-3 bg-[#F6F7FB] sm:px-9 sm:py-12 py-10 px-7'>
               <p className='font-[#455468]'>Target</p>
               <h3 className='font-bold text-xl'>$500,000</h3>
            </div>
        </div> 
      </div>
     </div>


       <div className='flex flex-col gap-5'>
       {/* Key Insights & Feedback*/}
      <div className='bg-white p-4 rounded-2xl w-full h-full   border border-gray-200'>
        <h3 className='text-xl font-bold mt-2 mb-2'>Key Insights & Feedback</h3>  
        <div className='flex items-center justify-between border-b border-gray-300 py-4'>
            <p className='flex flex-col'><span className='text-3xl font-bold'>10%</span><span className='text-[#475467]'>Sales Growth </span></p>
            <div className='flex flex-col items-center gap-2'>
               <Image
                 src='/images/key_insights_logo.png'
                 height={40}
                 width={38}
                 alt='key_insights_logo'
               />
               <p className='text-[#279DD4] text-sm bg-[#D5F2FF80] border rounded-2xl px-1'>Top Performer</p>  
            </div> 

        </div>
        <div className='bg-[#F6F7FB] mt-3 p-3'>
          <h4 className='font-bold'>Feedback</h4>
          <div className='text-sm flex mt-2 gap-2'>   
            <span className="h-2.5 w-3 mt-1 rounded-full bg-gray-300" />
            <span className="text-sm text-[#455468]">Franchisees are requesting more detailed training materials.</span>
          </div>
        </div>
      </div>
      
      {/* Prospect Leads*/}
      <div className='bg-white p-4 rounded-2xl w-full h-full   border border-gray-200'>
        <h3 className='text-xl font-bold mt-2  '>Prospect Leads</h3>  
         <div>
         <ul className="space-y-3 mt-4">
            {prospectLeads.map((lead, id) => (
              <li key={id} className="flex items-center justify-between rounded-lg p-3.5 bg-[#F6F7FB]">
                 <div className="flex items-center space-x-2">
                   <Image
                     src={`/avatars/${lead.logo}`}
                     height={30}
                     width={30}
                     alt='Prospect Leads logo'
                     className='rounded-full'
                   />
                  <p className="text-[14px]">
                    {lead.name}
                  </p>
                </div>
                <div>
                  <p className=" text-[14px] text-[#1C222BE5]">
                  {lead.stage}
                  
                  </p>
                </div>
              </li>
            ))}
          </ul>
         </div>
      </div>

      </div>          
    </div>

  );
}
