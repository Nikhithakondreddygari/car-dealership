// import React from 'react'
// import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

// function Addcar() {
//   return (
//     <div>
//       <form>
//       <div className="space-y-12">
//         <div className="border-b border-gray-900/10 pb-12">
//           <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
//           <p className="mt-1 text-sm leading-6 text-gray-600">
//             This information will be displayed publicly so be careful what you share.
//           </p>

//           <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
//             <div className="sm:col-span-4">
//               <label htmlFor="username" className="block text-sm font-medium leading-6 text-black">
//                 Username
//               </label>
//               <div className="mt-2">
//                 <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
//                   <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">workcation.com/</span>
//                   <input
//                     type="text"
//                     name="username"
//                     id="username"
//                     autoComplete="username"
//                     className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-[red] placeholder:text-black focus:ring-0 sm:text-sm sm:leading-6"
//                     placeholder="janesmith"
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="col-span-full">
//               <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
//                 About
//               </label>
//               <div className="mt-2">
//                 <textarea
//                   id="about"
//                   name="about"
//                   rows={3}
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   defaultValue={''}
//                 />
//               </div>
//               <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
//             </div>

//             <div className="col-span-full">
//               <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
//                 Photo
//               </label>
//               <div className="mt-2 flex items-center gap-x-3">
//                 <UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true" />
//                 <button
//                   type="button"
//                   className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
//                 >
//                   Change
//                 </button>
//               </div>
//             </div>

//             <div className="col-span-full">
//               <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
//                 Cover photo
//               </label>
//               <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
//                 <div className="text-center">
//                   <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
//                   <div className="mt-4 flex text-sm leading-6 text-gray-600">
//                     <label
//                       htmlFor="file-upload"
//                       className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
//                     >
//                       <span>Upload a file</span>
//                       <input id="file-upload" name="file-upload" type="file" className="sr-only" />
//                     </label>
//                     <p className="pl-1">or drag and drop</p>
//                   </div>
//                   <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="border-b border-gray-900/10 pb-12">
//           <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
//           <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

//           <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
//             <div className="sm:col-span-3">
//               <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
//                 First name
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   name="first-name"
//                   id="first-name"
//                   autoComplete="given-name"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-3">
//               <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
//                 Last name
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   name="last-name"
//                   id="last-name"
//                   autoComplete="family-name"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-4">
//               <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
//                 Email address
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-3">
//               <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
//                 Country
//               </label>
//               <div className="mt-2">
//                 <select
//                   id="country"
//                   name="country"
//                   autoComplete="country-name"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
//                 >
//                   <option>United States</option>
//                   <option>Canada</option>
//                   <option>Mexico</option>
//                 </select>
//               </div>
//             </div>

//             <div className="col-span-full">
//               <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
//                 Street address
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   name="street-address"
//                   id="street-address"
//                   autoComplete="street-address"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-2 sm:col-start-1">
//               <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
//                 City
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   name="city"
//                   id="city"
//                   autoComplete="address-level2"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-2">
//               <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
//                 State / Province
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   name="region"
//                   id="region"
//                   autoComplete="address-level1"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-2">
//               <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
//                 ZIP / Postal code
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   name="postal-code"
//                   id="postal-code"
//                   autoComplete="postal-code"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="border-b border-gray-900/10 pb-12">
//           <h2 className="text-base font-semibold leading-7 text-gray-900">Notifications</h2>
//           <p className="mt-1 text-sm leading-6 text-gray-600">
//             We'll always let you know about important changes, but you pick what else you want to hear about.
//           </p>

//           <div className="mt-10 space-y-10">
//             <fieldset>
//               <legend className="text-sm font-semibold leading-6 text-gray-900">By Email</legend>
//               <div className="mt-6 space-y-6">
//                 <div className="relative flex gap-x-3">
//                   <div className="flex h-6 items-center">
//                     <input
//                       id="comments"
//                       name="comments"
//                       type="checkbox"
//                       className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
//                     />
//                   </div>
//                   <div className="text-sm leading-6">
//                     <label htmlFor="comments" className="font-medium text-gray-900">
//                       Comments
//                     </label>
//                     <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p>
//                   </div>
//                 </div>
//                 <div className="relative flex gap-x-3">
//                   <div className="flex h-6 items-center">
//                     <input
//                       id="candidates"
//                       name="candidates"
//                       type="checkbox"
//                       className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
//                     />
//                   </div>
//                   <div className="text-sm leading-6">
//                     <label htmlFor="candidates" className="font-medium text-gray-900">
//                       Candidates
//                     </label>
//                     <p className="text-gray-500">Get notified when a candidate applies for a job.</p>
//                   </div>
//                 </div>
//                 <div className="relative flex gap-x-3">
//                   <div className="flex h-6 items-center">
//                     <input
//                       id="offers"
//                       name="offers"
//                       type="checkbox"
//                       className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
//                     />
//                   </div>
//                   <div className="text-sm leading-6">
//                     <label htmlFor="offers" className="font-medium text-gray-900">
//                       Offers
//                     </label>
//                     <p className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
//                   </div>
//                 </div>
//               </div>
//             </fieldset>
//             <fieldset>
//               <legend className="text-sm font-semibold leading-6 text-gray-900">Push Notifications</legend>
//               <p className="mt-1 text-sm leading-6 text-gray-600">These are delivered via SMS to your mobile phone.</p>
//               <div className="mt-6 space-y-6">
//                 <div className="flex items-center gap-x-3">
//                   <input
//                     id="push-everything"
//                     name="push-notifications"
//                     type="radio"
//                     className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
//                   />
//                   <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">
//                     Everything
//                   </label>
//                 </div>
//                 <div className="flex items-center gap-x-3">
//                   <input
//                     id="push-email"
//                     name="push-notifications"
//                     type="radio"
//                     className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
//                   />
//                   <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">
//                     Same as email
//                   </label>
//                 </div>
//                 <div className="flex items-center gap-x-3">
//                   <input
//                     id="push-nothing"
//                     name="push-notifications"
//                     type="radio"
//                     className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
//                   />
//                   <label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-gray-900">
//                     No push notifications
//                   </label>
//                 </div>
//               </div>
//             </fieldset>
//           </div>
//         </div>
//       </div>

//       <div className="mt-6 flex items-center justify-end gap-x-6">
//         <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
//           Cancel
//         </button>
//         <button
//           type="submit"
//           className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//         >
//           Save
//         </button>
//       </div>
//     </form>
//     </div>
//   )
// }

// export default Addcar;

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

// import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

// export default function Addcar() {
//   return (
//     <form>
//       <div className="space-y-12">
//         <div className="border-b border-gray-900/10 pb-12">
//           <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
//           <p className="mt-1 text-sm leading-6 text-gray-600">
//             This information will be displayed publicly so be careful what you share.
//           </p>

//           <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
//             <div className="sm:col-span-4">
//               <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
//                 Username
//               </label>
//               <div className="mt-2">
//                 <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
//                   <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">workcation.com/</span>
//                   <input
//                     type="text"
//                     name="username"
//                     id="username"
//                     autoComplete="username"
//                     className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
//                     placeholder="janesmith"
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="col-span-full">
//               <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
//                 About
//               </label>
//               <div className="mt-2">
//                 <textarea
//                   id="about"
//                   name="about"
//                   rows={3}
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   defaultValue={''}
//                 />
//               </div>
//               <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
//             </div>

//             <div className="col-span-full">
//               <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
//                 Photo
//               </label>
//               <div className="mt-2 flex items-center gap-x-3">
//                 <UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true" />
//                 <button
//                   type="button"
//                   className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
//                 >
//                   Change
//                 </button>
//               </div>
//             </div>

//             <div className="col-span-full">
//               <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
//                 Cover photo
//               </label>
//               <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
//                 <div className="text-center">
//                   <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
//                   <div className="mt-4 flex text-sm leading-6 text-gray-600">
//                     <label
//                       htmlFor="file-upload"
//                       className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
//                     >
//                       <span>Upload a file</span>
//                       <input id="file-upload" name="file-upload" type="file" className="sr-only" />
//                     </label>
//                     <p className="pl-1">or drag and drop</p>
//                   </div>
//                   <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="border-b border-gray-900/10 pb-12">
//           <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
//           <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

//           <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
//             <div className="sm:col-span-3">
//               <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
//                 First name
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   name="first-name"
//                   id="first-name"
//                   autoComplete="given-name"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-3">
//               <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
//                 Last name
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   name="last-name"
//                   id="last-name"
//                   autoComplete="family-name"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-4">
//               <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
//                 Email address
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-3">
//               <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
//                 Country
//               </label>
//               <div className="mt-2">
//                 <select
//                   id="country"
//                   name="country"
//                   autoComplete="country-name"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
//                 >
//                   <option>United States</option>
//                   <option>Canada</option>
//                   <option>Mexico</option>
//                 </select>
//               </div>
//             </div>

//             <div className="col-span-full">
//               <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
//                 Street address
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   name="street-address"
//                   id="street-address"
//                   autoComplete="street-address"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-2 sm:col-start-1">
//               <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
//                 City
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   name="city"
//                   id="city"
//                   autoComplete="address-level2"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-2">
//               <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
//                 State / Province
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   name="region"
//                   id="region"
//                   autoComplete="address-level1"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-2">
//               <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
//                 ZIP / Postal code
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   name="postal-code"
//                   id="postal-code"
//                   autoComplete="postal-code"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="border-b border-gray-900/10 pb-12">
//           <h2 className="text-base font-semibold leading-7 text-gray-900">Notifications</h2>
//           <p className="mt-1 text-sm leading-6 text-gray-600">
//             We'll always let you know about important changes, but you pick what else you want to hear about.
//           </p>

//           <div className="mt-10 space-y-10">
//             <fieldset>
//               <legend className="text-sm font-semibold leading-6 text-gray-900">By Email</legend>
//               <div className="mt-6 space-y-6">
//                 <div className="relative flex gap-x-3">
//                   <div className="flex h-6 items-center">
//                     <input
//                       id="comments"
//                       name="comments"
//                       type="checkbox"
//                       className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
//                     />
//                   </div>
//                   <div className="text-sm leading-6">
//                     <label htmlFor="comments" className="font-medium text-gray-900">
//                       Comments
//                     </label>
//                     <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p>
//                   </div>
//                 </div>
//                 <div className="relative flex gap-x-3">
//                   <div className="flex h-6 items-center">
//                     <input
//                       id="candidates"
//                       name="candidates"
//                       type="checkbox"
//                       className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
//                     />
//                   </div>
//                   <div className="text-sm leading-6">
//                     <label htmlFor="candidates" className="font-medium text-gray-900">
//                       Candidates
//                     </label>
//                     <p className="text-gray-500">Get notified when a candidate applies for a job.</p>
//                   </div>
//                 </div>
//                 <div className="relative flex gap-x-3">
//                   <div className="flex h-6 items-center">
//                     <input
//                       id="offers"
//                       name="offers"
//                       type="checkbox"
//                       className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
//                     />
//                   </div>
//                   <div className="text-sm leading-6">
//                     <label htmlFor="offers" className="font-medium text-gray-900">
//                       Offers
//                     </label>
//                     <p className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
//                   </div>
//                 </div>
//               </div>
//             </fieldset>
//             <fieldset>
//               <legend className="text-sm font-semibold leading-6 text-gray-900">Push Notifications</legend>
//               <p className="mt-1 text-sm leading-6 text-gray-600">These are delivered via SMS to your mobile phone.</p>
//               <div className="mt-6 space-y-6">
//                 <div className="flex items-center gap-x-3">
//                   <input
//                     id="push-everything"
//                     name="push-notifications"
//                     type="radio"
//                     className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
//                   />
//                   <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">
//                     Everything
//                   </label>
//                 </div>
//                 <div className="flex items-center gap-x-3">
//                   <input
//                     id="push-email"
//                     name="push-notifications"
//                     type="radio"
//                     className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
//                   />
//                   <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">
//                     Same as email
//                   </label>
//                 </div>
//                 <div className="flex items-center gap-x-3">
//                   <input
//                     id="push-nothing"
//                     name="push-notifications"
//                     type="radio"
//                     className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
//                   />
//                   <label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-gray-900">
//                     No push notifications
//                   </label>
//                 </div>
//               </div>
//             </fieldset>
//           </div>
//         </div>
//       </div>

//       <div className="mt-6 flex items-center justify-end gap-x-6">
//         <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
//           Cancel
//         </button>
//         <button
//           type="submit"
//           className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//         >
//           Save
//         </button>
//       </div>
//     </form>
//   )
// }











// working code for addcar component

// import React, { useState } from "react";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Sidebar from "../Sidebar/Sidebar";

// const Addcar = ({ onAddSoldCar }) => {
//   const [formData, setFormData] = useState({
//     brandName: "",
//     numberOfOwner: "",
//     transmissionType: "",
//     registrationYear: "",
//     kilometersDriven: "",
//     price: "",
//     selectedFiles: [],
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       await axios.post("http://localhost:5173/addcar", formData);
//       onAddSoldCar(formData);

//       setFormData({
//         brandName: "",
//         numberOfOwner: "",
//         transmissionType: "",
//         registrationYear: "",
//         kilometersDriven: "",
//         price: "",
//         selectedFiles: [],
//       });

//       toast.success("Data send to backend successfully");
//     } catch (error) {
//       console.error("error sending data to backend:", error);
//       toast.error("failed to send data to backend");
//     }
//   };
//   const [selectedFiles, setSelectedFile] = useState(null);

//   const handleFileChange = (event) => {
//     setSelectedFile([...selectedFiles, ...event.target.files]);
//   };

//   return (
//     <Sidebar>
//       <div className="justify-items-center ml-32 mt-5 border mr-5 w-[70%] mt-0 p-8 rounded-lg">
//         <form onSubmit={handleSubmit}>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-2 h-[55vh] w-full justify-items-center justify-items-between border border-none rounded-lg backdrop-blur-xl">
//             <div className="mb-4">
//               <div>
//                 <div>
//                   <label>Brand name</label>
//                 </div>
//                 <div>
//                   <input
//                     type="text"
//                     placeholder="Brand name"
//                     name="brandName"
//                     value={formData.brandName}
//                     onChange={handleInputChange}
//                     required
//                     className="border border-gray-400 py-1 px-2 mt-1 w-full h-14 text-black"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label>Number of owners</label>
//               </div>
//               <div>
//                 <input
//                   type="text"
//                   placeholder="Number of owners"
//                   name="numberOfOwners"
//                   value={formData.numberOfOwners}
//                   onChange={handleInputChange}
//                   required
//                   className="border border-gray-400 py-1 px-2 mt-1 w-full h-14 text-black"
//                 />
//               </div>
//               <div>
//                 <label>Transmission type</label>
//               </div>
//               <div>
//                 <select
//                   name="transmissionType"
//                   value={formData.transmissionType}
//                   onChange={handleInputChange}
//                   className="border mt-1 border-gray-400 py-1 px-2 h-14 w-full text-black"
//                 >
//                   <option>option</option>
//                   <option>Manual</option>
//                   <option>Automatic</option>
//                 </select>
//               </div>
//               <div>
//                 <label>Choose photo</label>
//               </div>
//               <div>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={handleFileChange}
//                   multiple
//                   className="border border-gray-400 py-1 px-2 mt-1 w-full h-14 text-white"
//                 />
//               </div>
//             </div>

//             <div>
//               <div>
//                 <div>
//                   <label className="mt-4">Registered year</label>
//                 </div>
//                 <div>
//                   <input
//                     type="text"
//                     placeholder="Registrain Year "
//                     name="registrationYear"
//                     value={formData.registrationYear}
//                     onChange={handleInputChange}
//                     required
//                     className="border border-gray-400 py-1 px-2 mt-1 w-full h-14 text-black"
//                   />
//                 </div>
//               </div>

             

//               <div>
//                 <div>
//                   <label>Kilometers driven</label>
//                 </div>
//                 <div>
//                   <input
//                     type="text"
//                     placeholder="Kilometers Driven"
//                     name="kilometerDriven"
//                     value={formData.kilometerDriven}
//                     onChange={handleInputChange}
//                     className="border mt-1 border-gray-400 py-1 px-2 h-14 w-full text-black"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <div>
//                   <label>Price</label>
//                 </div>
//                 <div>
//                   <input
//                     type="text"
//                     placeholder="Registrain State "
//                     name="price"
//                     value={formData.price}
//                     onChange={handleInputChange}
//                     required
//                     className="border border-gray-400 py-1 px-2 mt-1 w-full h-14 text-black"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* <div>
//             <div>
//               <div>
//                 <label className="">Fuel type</label>
//               </div>
//               <div>
//                 <input
//                   type="text"
//                   placeholder="Fuel type"
//                   required
//                   className="border   border-gray-400 py-1 px-2 mt-1 h-14 w-full text-black"
//                 />
//               </div>
//             </div>
//             {/* <div>23</div> */}
//             {/* </div> */}
//           </div>
//           <div className="flex justify-center">
//             <button
//               type="submit"
//               className="mt-4 bg-black hover:bg-primary text-white font-bold py-2 px-4 rounded"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </Sidebar>
//   );
// };

// export default Addcar;


import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "../Sidebar/Sidebar";

const AddCar = ({ onAddSoldCar }) => {
  const [formData, setFormData] = useState({
    BrandName: "",
    NumberOfOwners: "",
    TransmissionType: "",
    RegistrationYear: "",
    KilometersDriven: "",
    price: "",
    selectedFiles: []
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (event) => {
    setFormData({ ...formData, selectedFiles: event.target.files });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach(key => {
      if (key === 'selectedFiles') {
        Array.from(formData.selectedFiles).forEach(file => data.append('photos', file));
      } else {
        data.append(key, formData[key]);
      }
    });

    try {
      const response = await axios.post("http://localhost:3000/addCar", data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      onAddSoldCar(response.data.car);
      setFormData({
        BrandName: "",
        NumberOfOwners: "",
        TransmissionType: "",
        RegistrationYear: "",
        KilometersDriven: "",
        price: "",
        selectedFiles: []
      });
      toast.success("Data sent to backend successfully");
    } catch (error) {
      console.error("Error sending data to backend:", error);
      toast.error("Failed to send data to backend");
    }
  };

  return (
    <Sidebar>
      <div className="justify-items-center ml-32 mt-5 border mr-5 w-[70%] mt-0 p-8 rounded-lg">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-2 h-[55vh] w-full justify-items-center justify-items-between border border-none rounded-lg backdrop-blur-xl">
            <div className="mb-4">
              <div>
                <label>Brand Name</label>
                <input
                  type="text"
                  placeholder="Brand name"
                  name="BrandName"
                  value={formData.BrandName}
                  onChange={handleInputChange}
                  required
                  className="border border-gray-400 py-1 px-2 mt-1 w-full h-14 text-black"
                />
              </div>
              <div>
                <label>Number of Owners</label>
                <input
                  type="number"
                  placeholder="Number of owners"
                  name="NumberOfOwners"
                  value={formData.NumberOfOwners}
                  onChange={handleInputChange}
                  required
                  className="border border-gray-400 py-1 px-2 mt-1 w-full h-14 text-black"
                />
              </div>
              <div>
                <label>Transmission Type</label>
                <select
                  name="TransmissionType"
                  value={formData.TransmissionType}
                  onChange={handleInputChange}
                  className="border mt-1 border-gray-400 py-1 px-2 h-14 w-full text-black"
                >
                  <option value="">Select</option>
                  <option value="Manual">Manual</option>
                  <option value="Automatic">Automatic</option>
                </select>
              </div>
              <div>
                <label>Choose Photos</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  multiple
                  className="border border-gray-400 py-1 px-2 mt-1 w-full h-14 text-white"
                />
              </div>
            </div>
            <div>
              <div>
                <label>Registration Year</label>
                <input
                  type="number"
                  placeholder="Registration Year"
                  name="RegistrationYear"
                  value={formData.RegistrationYear}
                  onChange={handleInputChange}
                  required
                  className="border border-gray-400 py-1 px-2 mt-1 w-full h-14 text-black"
                />
              </div>
              <div>
                <label>Kilometers Driven</label>
                <input
                  type="number"
                  placeholder="Kilometers Driven"
                  name="KilometersDriven"
                  value={formData.KilometersDriven}
                  onChange={handleInputChange}
                  className="border mt-1 border-gray-400 py-1 px-2 h-14 w-full text-black"
                />
              </div>
              <div>
                <label>Price</label>
                <input
                  type="number"
                  placeholder="Price"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  required
                  className="border border-gray-400 py-1 px-2 mt-1 w-full h-14 text-black"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="mt-4 bg-black hover:bg-primary text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </Sidebar>
  );
};

export default AddCar;
















// const notify = () => toast("Successfully Added The Car!");

// const [carData, setCarData] = useState({
//   make: '',
//   model: '',
//   year: '',
//   color: '',
//   price: '',
//   photos: []
// });

// const handleChange = (e) => {
//   if (e.target.name === 'photos') {
//     // If the changed input is the photo input
//     setCarData({
//       ...carData,
//       photo: [...carData.photos, ...e.target.files], // Set the value to the selected file
//     });
//   } else {
//     // For other inputs, update as usual
//     setCarData({
//       ...carData,
//       [e.target.name]: e.target.value
//     });
//   }
// };
// const handleSubmit = async (e) => {
//   e.preventDefault();
//   try{
//     const response = await axios.post('http://localhost:5173/soldcar' , carData);
//     console.log('Submitted data:', carData);

//   // Reset form fields
//   setCarData({
//     make: '',
//     model: '',
//     year: '',
//     color: '',
//     price: '',
//     photos: [],
//   });
// }catch (error){
//   console.error('Error:', error);
// }
// }

// return{
// {/* <div className="w-full max-w-xs mx-auto mt-10">
// {/* <div className='absolute inset-0 bg-gray-500 opacity-75 backdrop-blur-lg'></div> */}
// <form onSubmit={handleSubmit} className="bg-gray-400 shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
//   <div className="mb-4 ">
//     <label className="block text-gray-900 text-sm font-bold mb-2" htmlFor="make">
//       Make
//     </label>
//     <input
//       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//       id="make"
//       type="text"
//       name="make"
//       value={carData.make}
//       onChange={handleChange}
//       placeholder="Enter make"
//       required
//     />
//   </div>
//   <div className="mb-4">
//     <label className="block text-gray-900 text-sm font-bold mb-2" htmlFor="model">
//       Model
//     </label>
//     <input
//       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//       id="model"
//       type="text"
//       name="model"
//       value={carData.model}
//       onChange={handleChange}
//       placeholder="Enter model"
//       required
//     />
//   </div>
//   <div className="mb-4">
//     <label className="block text-gray-900 text-sm font-bold mb-2" htmlFor="year">
//       Year
//     </label>
//     <input
//       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//       id="year"
//       type="text"
//       name="year"
//       value={carData.year}
//       onChange={handleChange}
//       placeholder="Enter year"
//       required
//     />
//   </div>
//   <div className="mb-4">
//     <label className="block text-gray-900 text-sm font-bold mb-2" htmlFor="color">
//       Color
//     </label>
//     <input
//       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//       id="color"
//       type="text"
//       name="color"
//       value={carData.color}
//       onChange={handleChange}
//       placeholder="Enter color"
//       required
//     />
//   </div>
//   <div className="mb-4">
//     <label className="block text-gray-900 text-sm font-bold mb-2" htmlFor="price">
//       Price
//     </label>
//     <input
//       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//       id="price"
//       type="text"
//       name="price"
//       value={carData.price}
//       onChange={handleChange}
//       placeholder="Enter price"
//       required
//     />
//   </div>

//   <div className="mb-4">
//     <label className="block text-gray-900 text-sm font-bold mb-2" htmlFor="photo">
//       Photo
//     </label>
//     <input
//       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//       id="photos"
//       type="file"
//       name="photos"
//       required
//       onChange={handleChange}
//       multiple // Allow multiple file selection
//       accept="image/*" // Limit file selection to images
//       />
//   </div>
//   <div className="flex items-center justify-center">
//     <button
//       className="bg-blue-600 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//       type="submit"
//       onClick={notify}
//     >
//       Add Car
//     </button>
//     <div>
//   <ToastContainer />
// </div>
//   </div>
// </form>

// </div>
// }
