import { Search } from 'lucide-react'

export default function SearchLoading() {
  return (
    <div className="w-full max-w-[900px] px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-center gap-3 mb-8">
        <Search className="h-6 w-6 text-[#257ee1] animate-pulse" />
        <h1 className="text-3xl font-bold">Search</h1>
      </div>
      
      <div className="bg-[#2f2f32]/50 border border-[rgba(255,255,255,0.05)] rounded-xl p-8">
        <div className="flex items-center justify-center gap-2">
          <div className="h-2 w-2 bg-[#257ee1] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="h-2 w-2 bg-[#257ee1] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="h-2 w-2 bg-[#257ee1] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
        <p className="text-center text-muted-foreground mt-4">Loading search results...</p>
      </div>
    </div>
  )
}
