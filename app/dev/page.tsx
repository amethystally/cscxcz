1| "use client"
2| 
3| import { DeploymentHelperDev } from "@/components/deployment-helper-dev"
4| import { Button } from "@/components/ui/button"
5| import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
6| import Link from "next/link"
7| import { ArrowLeft, FileCode, Server, Globe } from "lucide-react"
8| 
9| export default function DevPage() {
10|   return (
11|     <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
12|       <div className="max-w-4xl mx-auto">
13|         <div className="mb-6">
14|           <Link href="/" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">
15|             <ArrowLeft className="h-4 w-4 mr-2" />
16|             Back to Application
17|           </Link>
18|         </div>
19| 
20|         <Card className="mb-6">
21|           <CardHeader>
22|             <CardTitle className="text-2xl">Developer Tools</CardTitle>
23|             <CardDescription>Tools and resources for deploying and managing your application</CardDescription>
24|           </CardHeader>
25|           <CardContent className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
26|             <Card>
27|               <CardHeader className="pb-2">
28|                 <CardTitle className="text-lg flex items-center">
29|                   <Server className="h-5 w-5 mr-2 text-blue-500" />
30|                   Deployment
31|                 </CardTitle>
32|               </CardHeader>
33|               <CardContent className="text-sm text-gray-600 dark:text-gray-400">
34|                 Deploy your application to various hosting platforms
35|               </CardContent>
36|               <CardFooter>
37|                 <DeploymentHelperDev />
38|               </CardFooter>
39|             </Card>
40| 
41|             <Card>
42|               <CardHeader className="pb-2">
43|                 <CardTitle className="text-lg flex items-center">
44|                   <FileCode className="h-5 w-5 mr-2 text-green-500" />
45|                   Documentation
46|                 </CardTitle>
47|               </CardHeader>
48|               <CardContent className="text-sm text-gray-600 dark:text-gray-400">
49|                 View documentation and troubleshooting guides
50|               </CardContent>
51|               <CardFooter>
52|                 <div className="space-y-2 w-full">
53|                   <a href="/TROUBLESHOOTING.md" target="_blank" rel="noopener noreferrer" className="w-full">
54|                     <Button variant="outline" size="sm" className="w-full">
55|                       Troubleshooting Guide
56|                     </Button>
57|                   </a>
58|                   <a href="/README.md" target="_blank" rel="noopener noreferrer" className="w-full">
59|                     <Button variant="outline" size="sm" className="w-full">
60|                       README
61|                     </Button>
62|                   </a>
63|                 </div>
64|               </CardFooter>
65|             </Card>
66| 
67|             <Card>
68|               <CardHeader className="pb-2">
69|                 <CardTitle className="text-lg flex items-center">
70|                   <Globe className="h-5 w-5 mr-2 text-purple-500" />
71|                   Resources
72|                 </CardTitle>
73|               </CardHeader>
74|               <CardContent className="text-sm text-gray-600 dark:text-gray-400">
75|                 External resources and documentation
76|               </CardContent>
77|               <CardFooter>
78|                 <div className="space-y-2 w-full">
79|                   <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer" className="w-full">
80|                     <Button variant="outline" size="sm" className="w-full">
81|                       Next.js Docs
82|                     </Button>
83|                   </a>
84|                   <a href="https://vercel.com/docs" target="_blank" rel="noopener noreferrer" className="w-full">
85|                     <Button variant="outline" size="sm" className="w-full">
86|                       Vercel Docs
87|                     </Button>
88|                   </a>
89|                 </div>
90|               </CardFooter>
91|             </Card>
92|           </CardContent>
93|         </Card>
94| 
95|         <div className="text-center text-sm text-gray-500 dark:text-gray-400">
96|           <p>This page is only visible in development mode and won't be accessible to end users.</p>
97|         </div>
98|       </div>
99|     </div>
100|   )
101| }
