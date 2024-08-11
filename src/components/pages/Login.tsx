// export const Login = () => {
//   return (
//     <div class="flex items-center justify-center h-screen bg-gray-200 overflow-hidden">
//       <div class="bg-white p-8 rounded-lg shadow-lg">
//         <h1 class="text-2xl font-bold text-gray-700">Login</h1>
//         <form class="mt-4">
//           <div class="mb-6">
//             <label for="email" class="block text-gray-600 font-semibold">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               class="w-full mt-2 p-2 border border-gray-300 rounded-lg"
//             />
//           </div>
//           <div class="mb-6">
//             <label for="password" class="block text-gray-600 font-semibold">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               class="w-full mt-2 p-2 border border-gray-300 rounded-lg"
//             />
//           </div>
//           <button
//             type="submit"
//             class="w-full py-2 px-4 bg-blue-500 text-white rounded-lg"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };
export const Login = () => {
  return (
    <div class="flex items-center justify-center h-screen bg-gray-200 overflow-hidden">
      <div class="bg-white p-8 rounded-lg shadow-lg">
        <h1 class="text-2xl font-bold text-gray-700">Login</h1>
        <form hx-post="/login" hx-target="#login-response" class="mt-4">
          <div class="mb-6">
            <label for="email" class="block text-gray-600 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="w-full mt-2 p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div class="mb-6">
            <label for="password" class="block text-gray-600 font-semibold">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              class="w-full mt-2 p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <button
            type="submit"
            class="w-full py-2 px-4 bg-blue-500 text-white rounded-lg"
          >
            Login
          </button>
        </form>
        <div id="login-response"></div>
      </div>
    </div>
  );
};