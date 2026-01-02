export const Login = () => {
  return (        
    
    <div> 
      <div>
      <h1 className="text-center my-10 text-2xl font-semibold tracking-tight text-heading leading-8">Login</h1>
      </div>
    <form class="max-w-sm mx-auto">
      <div class="mb-5">
        <label for="email" class="block mb-2.5 text-sm font-medium text-heading">Your email</label>
        <input type="email" id="email" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="example@email.com" required />
      </div>
      <div class="mb-5">
        <label for="password" class="block mb-2.5 text-sm font-medium text-heading">Your password</label>
        <input type="password" id="password" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="••••••••" required />
      </div>
      
      <button type="submit" class="text-white bg-blue-500 box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Submit</button>
    </form>
    </div>
  )
}
