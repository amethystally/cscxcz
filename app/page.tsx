1| "use client"
2| 
3| import { useState, useEffect } from "react"
4| import { EmailFetcher } from "@/components/email-fetcher"
5| import { UsernameFetcher } from "@/components/username-fetcher"
6| import { EmailFetcherStatic } from "@/components/email-fetcher-static"
7| import { ThemeToggle } from "./theme-toggle"
8| 
9| export default function Home() {
10|   // Determine if we're using the static version (no API routes)
11|   const [isStatic, setIsStatic] = useState(false)
12|   const [isLoading, setIsLoading] = useState(true)
13| 
14|   useEffect(() => {
15|     // Check if we're in static export mode based on environment variable
16|     // or check if API routes are available by making a test request
17|     const checkApiAvailability = async () => {
18|       // First check if we're explicitly in static mode via env var
19|       if (typeof window !== "undefined" && window.ENV_IS_STATIC === "true") {
20|         console.log("Static mode detected via environment variable")
21|         setIsStatic(true)
22|         setIsLoading(false)
23|         return
24|       }
25| 
26|       try {
27|         const response = await fetch("/api/direct?email=test@example.com", {
28|           method: "GET",
29|           // Add cache busting to prevent cached responses
30|           headers: { "Cache-Control": "no-cache", Pragma: "no-cache" },
31|         })
32| 
33|         // If we get any response (even an error), the API route exists
34|         setIsStatic(false)
35|       } catch (error) {
36|         // If fetch fails completely, we're likely on a static host
37|         console.log("API routes not available, using static mode")
38|         setIsStatic(true)
39|       } finally {
40|         setIsLoading(false)
41|       }
42|     }
43| 
44|     checkApiAvailability()
45|   }, [])
46| 
47|   return (
48|     <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
49|       <ThemeToggle />
50|       <div className="w-full max-w-6xl mx-auto">
51|         {isLoading ? (
52|           <div className="flex justify-center items-center h-64">
53|             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500"></div>
54|           </div>
55|         ) : (
56|           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
57|             {isStatic ? (
58|               <>
59|                 <div className="w-full">
60|                   <EmailFetcherStatic />
61|                 </div>
62|               </>
63|             ) : (
64|               <>
65|                 <div className="w-full">
66|                   <UsernameFetcher />
67|                 </div>
68|                 <div className="w-full">
69|                   <EmailFetcher />
70|                 </div>
71|               </>
72|             )}
73|           </div>
74|         )}
75|         <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-4">
76|           This tool helps identify the region of TikTok accounts based on their username or email address.
77|           {isStatic && " (Running in static mode)"}
78|         </p>
79|       </div>
80|     </main>
81|   )
82| }
