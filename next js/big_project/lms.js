

//🔥 Routing Setup & navbar 

// project > app > sign-in > page.tsx 

import React, { Children } from 'react'

const Page = () => {
    return (
        <div>

        </div>
    )
}

export default Page


// project > app > companions >  page.tsx 

import React from 'react'

const companions = () => {
    return (
        <div>

        </div>
    )
}

export default companions


// project > app > companions > new > page.tsx 

import React from 'react'

const newCompanian = () => {
    return (
        <div>

        </div>
    )
}

export default newCompanian


// project > app > companions > [id] > page.tsx 

import React from 'react'

const CompanianSession = () => {
    return (
        <div>

        </div>
    )
}

export default CompanianSession


// project > app > my-journey  > page.tsx 

import React from 'react'

const Profile = () => {
    return (
        <div>

        </div>
    )
}

export default Profile


// project > app > subscription  > page.tsx 

import React from 'react'

const subscription = () => {
    return (
        <div>

        </div>
    )
}

export default subscription


// Project > Components > Navbar

import React from 'react'

const Navbar = () => {
    return (
        <div>
            <h1>Logo</h1>
            <Navitems />
        </div>
    )
}

export default Navbar


// Project > Components > Navitem

'use client'

import React from 'react'
import { usePathname } from 'next/navigation';

const navItems = [
    { label: "Home", href: "/" },
    { label: "Companions", href: "/companions" },
    { label: "My Journey", href: "/journey" },
]

const Navitems = () => {

    const pathname = usePathname()
    return (
        <div>
            {
                navItems.map(({ label, href }) => (
                    <Link href={href} key={label} className={cn(pathname === href && 'text-primary')}>{label}</Link>
                ))
            }
        </div>
    )
}

export default Navitems



// Project > app > layout.tsx

import React from 'react'

const layout = () => {
    return (
        <HTML>
            <Navbar />
            {Children}
        </HTML>
    )
}

export default layout


// ============================================================================================

//🔥 Home Page & Companion Card 


// Project > Components > ComponentCard.tsx

import React from 'react'

interface CompanionCardProps {
    id: string;
    name: String;
    topic: String;
    subject: String;
    duration: number;
    color: string
}

const ComponentCard = ({ id, name, topic, subject, duration, color }: CompanionCardProps) => {
    return (
        <div style={{ backgroundColor: color }} key={id}>
            <p>{subject}</p>
            <p>{duration}</p>
            <p>{topic}</p>
            <button src="/icons/bookmark.svg" width={12.5} height={15}><h2>{name}</h2></button>
            <Link href={`/companions/${id}`}><button>Launch Lesson</button></Link>
        </div>
    )
}

export default ComponentCard


// Project > Components > CompanionsList.tsx

type Companion = Models.DocumentList<Models.Document> & {
    $id: string;
    name: string;
    subject: Subject;
    topic: string;
    duration: number;
    bookmarked: boolean;
};

interface CompanionsListProps {
    title: String;
    companions?: Companion[];
    classNames?: String
}

const CompanionsList = ({ title, companions, classNames }: CompanionsListProps) => {
    return (
        <div className={cn(...inputs: "companion-list", classNames)}>
            <Ul><li>Lessions</li></Ul>
            <Ul><li>Subject</li></Ul>
            <Ul><li>Drations</li></Ul>

            <TableBody>
                <TableCell>
                    {
                        companions?.map(({ id, subject, name, topic, duration }) => {
                            return (
                                <>
                                    <TableRow>
                                        <Link href={`/companions/${id}`}>
                                            <p>{subject}</p>
                                            <p>{name}</p>
                                            <p>{topic}</p>
                                        </Link>
                                    </TableRow>
                                </>
                            )
                        })
                    }
                </TableCell>
            </TableBody>
        </div>
    )
}

export default CompanionsList


// Project > Components > CTA.tsx

import React from 'react'

const CTA = () => {
    return (
        <div>
            <Link href={"/companion/new"}>Build a New Companion</Link>
        </div>
    )
}


export default CTA


//app > index.ts 

export const recentSessions = [
    {
        id: 1,
        subject: "sceince",
        name: "name1",
        toppic: "topic1",
        duration: 45,
        color: "red"
    },
    {
        id: 2,
        subject: "sceince",
        name: "name1",
        toppic: "topic1",
        duration: 45,
        color: "red"
    },
    {
        id: 3,
        subject: "sceince",
        name: "name1",
        toppic: "topic1",
        duration: 45,
        color: "red"
    },
]


//app > Page.tsx (Home page)

import React from 'react'

const Page = () => {
    return (
        <div>
            <h1>Popular Conpanians</h1>
            <section>
                <ComponentCard
                    id="123"
                    name="Neura the Brainy Exploration"
                    topic="topic"
                    subject="science"
                    duration={45}
                    color="#456675"
                />
                <ComponentCard
                    id="456"
                    name="Neura the Brainy Exploration"
                    topic="topic"
                    subject="science"
                    duration={45}
                    color="#456675"
                />
                <ComponentCard
                    id="789"
                    name="Neura the Brainy Exploration"
                    topic="topic"
                    subject="science"
                    duration={45}
                    color="#456675"
                />

            </section>

            <section>
                <CompanionsList
                    title="Recenly Complited sessions" companions={recentSessions} classNames="w-2/3 max-lg:w-full" />

                <CTA />
            </section>
        </div>
    )
}

export default Page

// =======================================================================================================

//🔥 Companion Form 


// project > app > companions > new > page.tsx 

import React from 'react'

const newCompanion = () => {
    return (
        <div>
            <CompanionForm />
        </div>
    )
}


// Project > Components > CompanionForm.tsx


"use client"

import { zodResolver } from "@hookform/resolvers/zod" //🔥
import { useForm } from "react-hook-form" //🔥
import { z } from "zod" //🔥
import { Button } from "@/components/ui/button"

import { //🔥
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"


import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { subjects } from "@/constants";
import { Textarea } from "@/components/ui/textarea";
import { createCompanion } from "@/lib/actions/companion.actions";
import { redirect } from "next/navigation";

const formSchema = z.object({ //🔥
    name: z.string().min(1, { message: 'Companion is required.' }),
    subject: z.string().min(1, { message: 'Subject is required.' }),
    topic: z.string().min(1, { message: 'Topic is required.' }),
    voice: z.string().min(1, { message: 'Voice is required.' }),
    style: z.string().min(1, { message: 'Style is required.' }),
    duration: z.coerce.number().min(1, { message: 'Duration is required.' }),
})

const CompanionForm = () => {
    const form = useForm < z.infer < typeof formSchema >> ({

        resolver: zodResolver(formSchema),
        defaultValues: { //🔥
            name: '',
            subject: '',
            topic: '',
            voice: '',
            style: '',
            duration: 15,
        },
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => { //🔥
        const companion = await createCompanion(values);

        if (companion) {
            redirect(`/companions/${companion.id}`);
        } else {
            console.log('Failed to create a companion');
            redirect('/');
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Companion name</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Enter the companion name"
                                    {...field}
                                    className="input"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                                <Select
                                    onValueChange={field.onChange}
                                    value={field.value}
                                    defaultValue={field.value}
                                >
                                    <SelectTrigger className="input capitalize">
                                        <SelectValue placeholder="Select the subject" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {subjects.map((subject) => (
                                            <SelectItem
                                                value={subject}
                                                key={subject}
                                                className="capitalize"
                                            >
                                                {subject}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="topic"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>What should the companion help with?</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Ex. Derivates & Integrals"
                                    {...field}
                                    className="input"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="voice"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Voice</FormLabel>
                            <FormControl>
                                <Select
                                    onValueChange={field.onChange}
                                    value={field.value}
                                    defaultValue={field.value}
                                >
                                    <SelectTrigger className="input">
                                        <SelectValue
                                            placeholder="Select the voice"
                                        />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="male">
                                            Male
                                        </SelectItem>
                                        <SelectItem value="female">
                                            Female
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="style"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Style</FormLabel>
                            <FormControl>
                                <Select
                                    onValueChange={field.onChange}
                                    value={field.value}
                                    defaultValue={field.value}
                                >
                                    <SelectTrigger className="input">
                                        <SelectValue
                                            placeholder="Select the style"
                                        />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="formal">
                                            Formal
                                        </SelectItem>
                                        <SelectItem value="casual">
                                            Casual
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="duration"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Estimated session duration in minutes</FormLabel>
                            <FormControl>
                                <Input
                                    type="number"
                                    placeholder="15"
                                    {...field}
                                    className="input"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="w-full cursor-pointer">Build Your Companion</Button>
            </form>
        </Form>
    )
}

export default CompanionForm

// =====================================================================================================================

// Cleark Auth 

/*
Go to clerk  > Overview > create .env.local

*/

// .env.local
NEXT_PUBLICK_CLEARK_PUBLISHABLE_KEY = oiurjjfdfdj
CLERK_SECRET_KEY = yor secrect key

NEXT_PUBLIC_CLERK_SIGN_IN_URL =/sign-in
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL =/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL =/


// project > middlware.ts (From Documentation)
import { clerkMiddleware } from '@clerk/nextjs/server'

export default clerkMiddleware()

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
}


// layout.ts 
import { ClearkProvider } from 'cleark/next js'

<ClearkProvider appearence={{ variable: { colorPrimary: "#fe5933" } }}> //wrap the app with cleark
    <Navbar />
    {Children}
</ClearkProvider>



// Project > Components > Navbar

import React from 'react'
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"; //🔥

const Navbar = () => {
    return (
        <div>
            <h1>Logo</h1>
            <Navitems />
            <SignedOut> //🔥
                <SignInButton>
                    <button className="btn-signin">Sign In</button>
                </SignInButton>
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
    )
}

export default Navbar

// https://clerk.com/docs/references/nextjs/custom-sign-in-or-up-page

// app > sign-in > [[...sign-in]] > page.tsx and update .env files

import React from 'react'
import { SignIn } from '@clerk/nextjs'

const page = () => {
    return (
        <div>
            <SignIn />
        </div>
    )
}

export default page

go to clark > find your project > configure > Email - phone, Username active, first and last name > ACcount proftal, customization > appearence - light >

    // ===============================================================================================================================================================================

    // Cleark Billing 

    Cleark > Subscriptin > Get started > Continue plan > Name - Basic Plan, Add Feature - 10 Conversations / month appky features, Core Learner - Add feature, Every thing free -

        Cleark - configure > Billing > Setting > Enable Billing

// Project > Components > Subscription > page.tsx

import React from 'react'

const Subscription = () => {
    return (
        <div>
            <PricingTable /> from cleark

        </div>
    )
}

export default Subscription

// =========================================================================================================================================================================================

// Setup Database & Cleark intigration 

/*
Sign in Supabase > Create project > 

Claerk Dashboard > configure > Developer > intigration > supabase (0n) > manage intigration - select origanization and select application > supabase third party auth setting >
select your project > Add provider > cleark pase the url .


Supase > table editor > Companion > Give name >Id(uuid), name(varchar), subject(varchar), topic(varchar), topic(varchar), syle(varcle), voice(varchar), duratin(int), author(varchar) - Save

supabe > table editor > session_history > Id(uuid), user_id(varchar), companion_id(uuid), Add forighn key - select a table to referance - Compnanion table - companion_id = Id(uuid), ACtion - Cascade , Cascade 

supabe > Authntication > Policiy > Create Policy > policiy name: All, Table: Companion, Target Role: Anon , true
supabe > Authntication > Policiy > Create Policy > policiy name: Cleark, Policy Command: All ,Table: Companion, Target Role: Authenticated User , wirte from screen short, 
supabe > Authntication > Policiy > Create Policy > policiy name: All, Policy Command: Select ,Table: session_history, Target Role: anon 
supabe > Authntication > Policiy > Create Policy > policiy name: Cleark, Policy Command: all ,Table: session_history, Target Role: Authenticated User,  wirte from screen short

Connect > App freamwork > paste env , 

npm i @supabase/supabase-js

*/

project > lib > supabase.ts

import { createClient } from "@supabase/supabase-js";
import { auth } from "@clerk/nextjs/server";

export const createSupabaseClient = () => {
    return createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
        async accessToken() {
            return ((await auth()).getToken());
        }
    }
    )
}


project > lib > actions > companion.actions.ts

'use server';

import { auth } from "@clerk/nextjs/server";
import { createSupabaseClient } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

export const createCompanion = async (formData: CreateCompanion) => { //🔥
    const { userId: author } = await auth();
    const supabase = createSupabaseClient();

    const { data, error } = await supabase
        .from('companions')
        .insert({ ...formData, author })
        .select();

    if (error || !data) throw new Error(error?.message || 'Failed to create a companion');

    return data[0];
}



// project > app > companions > new > page.tsx 

import React from 'react'
import { auth } from "@clerk/nextjs/server";

const newCompanion = async () => {

    const { userId } = await auth() //✅1 we get it from cleark

    if (!userId) redirect("/signin")
    return (
        <div>
            <CompanionForm />
        </div>
    )
}


// project > app > companions > CompanionForm.tsx

const CompanionForm = () => {
    const form = useForm < z.infer < typeof formSchema >> ({

        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            subject: '',
            topic: '',
            voice: '',
            style: '',
            duration: 15,
        },
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        const companion = await createCompanion(values); //✅2

        if (companion) {
            redirect(`/companions/${companion.id}`);
        } else {
            console.log('Failed to create a companion');
            redirect('/');
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Companion name</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Enter the companion name"
                                    {...field}
                                    className="input"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                                <Select
                                    onValueChange={field.onChange}
                                    value={field.value}
                                    defaultValue={field.value}
                                >
                                    <SelectTrigger className="input capitalize">
                                        <SelectValue placeholder="Select the subject" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {subjects.map((subject) => (
                                            <SelectItem
                                                value={subject}
                                                key={subject}
                                                className="capitalize"
                                            >
                                                {subject}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="topic"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>What should the companion help with?</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Ex. Derivates & Integrals"
                                    {...field}
                                    className="input"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="voice"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Voice</FormLabel>
                            <FormControl>
                                <Select
                                    onValueChange={field.onChange}
                                    value={field.value}
                                    defaultValue={field.value}
                                >
                                    <SelectTrigger className="input">
                                        <SelectValue
                                            placeholder="Select the voice"
                                        />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="male">
                                            Male
                                        </SelectItem>
                                        <SelectItem value="female">
                                            Female
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="style"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Style</FormLabel>
                            <FormControl>
                                <Select
                                    onValueChange={field.onChange}
                                    value={field.value}
                                    defaultValue={field.value}
                                >
                                    <SelectTrigger className="input">
                                        <SelectValue
                                            placeholder="Select the style"
                                        />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="formal">
                                            Formal
                                        </SelectItem>
                                        <SelectItem value="casual">
                                            Casual
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="duration"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Estimated session duration in minutes</FormLabel>
                            <FormControl>
                                <Input
                                    type="number"
                                    placeholder="15"
                                    {...field}
                                    className="input"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="w-full cursor-pointer">Build Your Companion</Button>
            </form>
        </Form>
    )
}

// ===========================================================================================================================


// Create companione libray (cards by fetch)


project > lib > actions > companion.actions.ts

'use server';

import { auth } from "@clerk/nextjs/server";
import { createSupabaseClient } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

export const createCompanion = async (formData: CreateCompanion) => { //🔥
    const { userId: author } = await auth();
    const supabase = createSupabaseClient();

    const { data, error } = await supabase
        .from('companions')
        .insert({ ...formData, author })
        .select();

    if (error || !data) throw new Error(error?.message || 'Failed to create a companion');

    return data[0];
}

//✅1
export const getAllCompanions = async ({ limit = 10, page = 1, subject, topic }: GetAllCompanions) => {
    const supabase = createSupabaseClient();

    let query = supabase.from('companions').select();

    if (subject && topic) {
        query = query.ilike('subject', `%${subject}%`)
            .or(`topic.ilike.%${topic}%,name.ilike.%${topic}%`)
    } else if (subject) {
        query = query.ilike('subject', `%${subject}%`)
    } else if (topic) {
        query = query.or(`topic.ilike.%${topic}%,name.ilike.%${topic}%`)
    }

    query = query.range((page - 1) * limit, page * limit - 1);

    const { data: companions, error } = await query;

    if (error) throw new Error(error.message);

    return companions;
}



//✅2
// saas-app/types/index.d.ts

interface GetAllCompanions {
    limit?: number;
    page?: number;
    subject?: string | string[];
    topic?: string | string[];
}





//✅3

// project / app / companions

import { getAllCompanions } from "@/lib/actions/companion.actions";
import CompanionCard from "@/components/CompanionCard";
import { getSubjectColor } from "@/lib/utils";
import SearchInput from "@/components/SearchInput";
import SubjectFilter from "@/components/SubjectFilter";

const CompanionsLibrary = async ({ searchParams }: SearchParams) => {
    const filters = await searchParams;
    const subject = filters.subject ? filters.subject : '';
    const topic = filters.topic ? filters.topic : '';

    const companions = await getAllCompanions({ subject, topic });

    return (
        <main>
            <section className="flex justify-between gap-4 max-sm:flex-col">
                <h1>Companion Library</h1>
                <div className="flex gap-4">
                    <SearchInput /> //✅5
                    <SubjectFilter /> //✅5
                </div>
            </section>
            <section className="companions-grid">
                {companions.map((companion) => (
                    <CompanionCard
                        key={companion.id}
                        {...companion}
                        color={getSubjectColor(companion.subject)}
                    />
                ))}
            </section>
        </main>
    )
}

export default CompanionsLibrary


//✅4

// saas-app/components/SearchInput

'use client';

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { formUrlQuery, removeKeysFromUrlQuery } from "@jsmastery/utils";

const SearchInput = () => {
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();
    const query = searchParams.get('topic') || '';

    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (searchQuery) {
                router.push(href, `/currentRoute?topic=${searchQuery}`)

                router.push(newUrl, { scroll: false });
            } else {
                if (pathname === '/companions') {
                    const newUrl = removeKeysFromUrlQuery({
                        params: searchParams.toString(),
                        keysToRemove: ["topic"],
                    });

                    router.push(newUrl, { scroll: false });
                }
            }
        }, 500)
    }, [searchQuery, router, searchParams, pathname]);

    return (
        <div className="relative border border-black rounded-lg items-center flex gap-2 px-2 py-1 h-fit">
            <Image src="/icons/search.svg" alt="search" width={15} height={15} />
            <input
                placeholder="Search companions..."
                className="outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </div>
    )
}
export default SearchInput



//✅4
// saas-app/components/SubjectFilter.tsx

"use client";
import React, { useEffect, useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select";
import { subjects } from "@/constants";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { formUrlQuery, removeKeysFromUrlQuery } from "@jsmastery/utils";

const SubjectFilter = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const query = searchParams.get("subject") || "";

    const [subject, setSubject] = useState(query);

    useEffect(() => {
        let newUrl = "";
        if (subject === "all") {
            newUrl = removeKeysFromUrlQuery({
                params: searchParams.toString(),
                keysToRemove: ["subject"],
            });
        } else {
            newUrl = formUrlQuery({
                params: searchParams.toString(),
                key: "subject",
                value: subject,
            });
        }
        router.push(newUrl, { scroll: false });
    }, [subject]);

    return (
        <Select onValueChange={setSubject} value={subject}>
            <SelectTrigger className="input capitalize">
                <SelectValue placeholder="Subject" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="all">All subjects</SelectItem>
                {subjects.map((subject) => (
                    <SelectItem key={subject} value={subject} className="capitalize">
                        {subject}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};

export default SubjectFilter;



// =============================================================================================================

// Vapi Setup (AI taking)

// Signup -> Vapi api keys -> new publick key -> crate -> coppy paste kn .env 

.env
// NEXT_PUBLIC_VAPI_WEB_TOKEN = "dsfdfdfdffdfdf"


// saas-app/lib/vapi.sdk.ts

import Vapi from "@vapi-ai/web";

export const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_WEB_TOKEN!);


// project > lib > actions > companion.actions.ts

'use server';

import { auth } from "@clerk/nextjs/server";
import { createSupabaseClient } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

export const createCompanion = async (formData: CreateCompanion) => { //🔥
    const { userId: author } = await auth();
    const supabase = createSupabaseClient();

    const { data, error } = await supabase
        .from('companions')
        .insert({ ...formData, author })
        .select();

    if (error || !data) throw new Error(error?.message || 'Failed to create a companion');

    return data[0];
}


export const getAllCompanions = async ({ limit = 10, page = 1, subject, topic }: GetAllCompanions) => {
    const supabase = createSupabaseClient();

    let query = supabase.from('companions').select();

    if (subject && topic) {
        query = query.ilike('subject', `%${subject}%`)
            .or(`topic.ilike.%${topic}%,name.ilike.%${topic}%`)
    } else if (subject) {
        query = query.ilike('subject', `%${subject}%`)
    } else if (topic) {
        query = query.or(`topic.ilike.%${topic}%,name.ilike.%${topic}%`)
    }

    query = query.range((page - 1) * limit, page * limit - 1);

    const { data: companions, error } = await query;

    if (error) throw new Error(error.message);

    return companions;
}


//✅1
export const getCompanion = async (id: string) => {
    const supabase = createSupabaseClient();

    const { data, error } = await supabase
        .from('companions')
        .select()
        .eq('id', id);

    if (error) return console.log(error);

    return data[0];
}


// saas-app/app/companions/[id]/page.tsx

import { getCompanion } from "@/lib/actions/companion.actions";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getSubjectColor } from "@/lib/utils";
import Image from "next/image";
import CompanionComponent from "@/components/CompanionComponent";

interface CompanionSessionPageProps {
    params: Promise<{ id: string }>;
}

const CompanionSession = async ({ params }: CompanionSessionPageProps) => {
    const { id } = await params;
    const companion = await getCompanion(id);
    const user = await currentUser();

    const { name, subject, title, topic, duration } = companion;

    if (!user) redirect('/sign-in');
    if (!name) redirect('/companions')

    return (
        <main>
            <article className="flex rounded-border justify-between p-6 max-md:flex-col">
                <div className="flex items-center gap-2">
                    <div className="size-[72px] flex items-center justify-center rounded-lg max-md:hidden" style={{ backgroundColor: getSubjectColor(subject) }}>
                        <Image src={`/icons/${subject}.svg`} alt={subject} width={35} height={35} />
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <p className="font-bold text-2xl">
                                {name}
                            </p>
                            <div className="subject-badge max-sm:hidden">
                                {subject}
                            </div>
                        </div>
                        <p className="text-lg">{topic}</p>
                    </div>
                </div>
                <div className="items-start text-2xl max-md:hidden">
                    {duration} minutes
                </div>
            </article>

            <CompanionComponent
                {...companion}
                companionId={id}
                userName={user.firstName!}
                userImage={user.imageUrl!}
            />
        </main>
    )
}

export default CompanionSession


// =============================================================================================================

// Companion Component (AI Conversation)

// LOffieFiles for Animated Icon 


// saas-app/app/companions/[id]/page.tsx

import { getCompanion } from "@/lib/actions/companion.actions";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getSubjectColor } from "@/lib/utils";
import Image from "next/image";
import CompanionComponent from "@/components/CompanionComponent";

interface CompanionSessionPageProps {
    params: Promise<{ id: string }>;
}

const CompanionSession = async ({ params }: CompanionSessionPageProps) => {
    const { id } = await params;
    const companion = await getCompanion(id);
    const user = await currentUser();

    const { name, subject, title, topic, duration } = companion;

    if (!user) redirect('/sign-in');
    if (!name) redirect('/companions')

    return (
        <main>
            <article className="flex rounded-border justify-between p-6 max-md:flex-col">
                <div className="flex items-center gap-2">
                    <div className="size-[72px] flex items-center justify-center rounded-lg max-md:hidden" style={{ backgroundColor: getSubjectColor(subject) }}>
                        <Image src={`/icons/${subject}.svg`} alt={subject} width={35} height={35} />
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <p className="font-bold text-2xl">
                                {name}
                            </p>
                            <div className="subject-badge max-sm:hidden">
                                {subject}
                            </div>
                        </div>
                        <p className="text-lg">{topic}</p>
                    </div>
                </div>
                <div className="items-start text-2xl max-md:hidden">
                    {duration} minutes
                </div>
            </article>

            <CompanionComponent //✅1
                {...companion}
                companionId={id}
                userName={user.firstName!}
                userImage={user.imageUrl!}
            />
        </main>
    )
}

export default CompanionSession


// saas-app/components/CompanionComponent.tsx //✅2


'use client';

import { useEffect, useRef, useState } from 'react'
import { cn, configureAssistant, getSubjectColor } from "@/lib/utils";
import { vapi } from "@/lib/vapi.sdk";
import Image from "next/image";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import soundwaves from '@/constants/soundwaves.json'
import { addToSessionHistory } from "@/lib/actions/companion.actions";

interface CompanionComponentProps { //✅2
    companionId: string;
    subject: string;
    topic: string;
    name: string;
    userName: string;
    userImage: string;
    voice: string;
    style: string;
}

enum CallStatus {  //✅2
    INACTIVE = 'INACTIVE',
    CONNECTING = 'CONNECTING',
    ACTIVE = 'ACTIVE',
    FINISHED = 'FINISHED',
}


const CompanionComponent = ({ companionId, subject, topic, name, userName, userImage, style, voice }: CompanionComponentProps) => {

    const [callStatus, setCallStatus] = useState < CallStatus > (CallStatus.INACTIVE);//✅1
    const [isSpeaking, setIsSpeaking] = useState(false); //✅6
    const [isMuted, setIsMuted] = useState(false); //✅9


    const lottieRef = useRef < LottieRefCurrentProps > (null); //✅7


    useEffect(() => { //✅8
        if (lottieRef) {
            if (isSpeaking) {
                lottieRef.current?.play()
            } else {
                lottieRef.current?.stop()
            }
        }
    }, [isSpeaking, lottieRef])


    useEffect(() => {//✅3
        const onCallStart = () => setCallStatus(CallStatus.ACTIVE);

        const onCallEnd = () => {
            setCallStatus(CallStatus.FINISHED);
            addToSessionHistory(companionId)
        }

        const onMessage = (message: Message) => {
            if (message.type === 'transcript' && message.transcriptType === 'final') {
                const newMessage = { role: message.role, content: message.transcript }
                setMessages((prev) => [newMessage, ...prev])
            }
        }

        const onSpeechStart = () => setIsSpeaking(true);
        const onSpeechEnd = () => setIsSpeaking(false);

        const onError = (error: Error) => console.log('Error', error);

        vapi.on('call-start', onCallStart);
        vapi.on('call-end', onCallEnd);
        vapi.on('message', onMessage);
        vapi.on('error', onError);
        vapi.on('speech-start', onSpeechStart);
        vapi.on('speech-end', onSpeechEnd);

        return () => {
            vapi.off('call-start', onCallStart);
            vapi.off('call-end', onCallEnd);
            vapi.off('message', onMessage);
            vapi.off('error', onError);
            vapi.off('speech-start', onSpeechStart);
            vapi.off('speech-end', onSpeechEnd);
        }
    }, []);

     const toggleMicrophone = () => { //✅10
        const isMuted = vapi.isMuted();
        vapi.setMuted(!isMuted);
        setIsMuted(!isMuted)
    }

        const handleCall = async () => { //✅11
        setCallStatus(CallStatus.CONNECTING)

        const assistantOverrides = {
            variableValues: { subject, topic, style },
            clientMessages: ["transcript"],
            serverMessages: [],
        }

        // @ts-expect-error
        vapi.start(configureAssistant(voice, style), assistantOverrides)
    }

    const handleDisconnect = () => { //✅12
        setCallStatus(CallStatus.FINISHED)
        vapi.stop()
    }


    //✅4

    return (
        <>
            <div className="companion-avatar" style={{ backgroundColor: getSubjectColor(subject) }}>
                <div
                    className={
                        cn(
                            'absolute transition-opacity duration-1000', callStatus === CallStatus.FINISHED || callStatus === CallStatus.INACTIVE ? 'opacity-1001' : 'opacity-0', callStatus === CallStatus.CONNECTING && 'opacity-100 animate-pulse'
                        )
                    }>
                    <Image src={`/icons/${subject}.svg`} alt={subject} width={150} height={150} className="max-sm:w-fit" />
                </div>

                <div className={cn('absolute transition-opacity duration-1000', callStatus === CallStatus.ACTIVE ? 'opacity-100' : 'opacity-0')}>
                    <Lottie
                        lottieRef={lottieRef}
                        animationData={soundwaves}
                        autoplay={false}
                        className="companion-lottie"
                    />
                </div>
            </div>

            <p>{name}</p>


            //✅9
            <div className="user-section">
                    <div className="user-avatar">
                        <Image src={userImage} alt={userName} width={130} height={130} className="rounded-lg" />
                        <p className="font-bold text-2xl">
                            {userName}
                        </p>
                    </div>
                    <button className="btn-mic" onClick={toggleMicrophone} disabled={callStatus !== CallStatus.ACTIVE}>
                        <Image src={isMuted ? '/icons/mic-off.svg' : '/icons/mic-on.svg'} alt="mic" width={36} height={36} />
                        <p className="max-sm:hidden">
                            {isMuted ? 'Turn on microphone' : 'Turn off microphone'}
                        </p>
                    </button>
                    <button className={cn('rounded-lg py-2 cursor-pointer transition-colors w-full text-white', callStatus ===CallStatus.ACTIVE ? 'bg-red-700' : 'bg-primary', callStatus === CallStatus.CONNECTING && 'animate-pulse')} onClick={callStatus === CallStatus.ACTIVE ? handleDisconnect : handleCall}>
                        {callStatus === CallStatus.ACTIVE
                        ? "End Session"
                        : callStatus === CallStatus.CONNECTING
                            ? 'Connecting'
                        : 'Start Session'
                        }
                    </button>
                </div>
            
        </>
    )
}

export default CompanionComponent



// saas-app/lib/utils.ts

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { subjectsColors, voices } from "@/constants";
import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getSubjectColor = (subject: string) => {
  return subjectsColors[subject as keyof typeof subjectsColors];
};

export const configureAssistant = (voice: string, style: string) => {
  const voiceId = voices[voice as keyof typeof voices][
          style as keyof (typeof voices)[keyof typeof voices]
          ] || "sarah";

  const vapiAssistant: CreateAssistantDTO = {
    name: "Companion",
    firstMessage:
        "Hello, let's start the session. Today we'll be talking about {{topic}}.",
    transcriber: {
      provider: "deepgram",
      model: "nova-3",
      language: "en",
    },
    voice: {
      provider: "11labs",
      voiceId: voiceId,
      stability: 0.4,
      similarityBoost: 0.8,
      speed: 1,
      style: 0.5,
      useSpeakerBoost: true,
    },
    model: {
      provider: "openai",
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: `You are a highly knowledgeable tutor teaching a real-time voice session with a student. Your goal is to teach the student about the topic and subject.

                    Tutor Guidelines:
                    Stick to the given topic - {{ topic }} and subject - {{ subject }} and teach the student about it.
                    Keep the conversation flowing smoothly while maintaining control.
                    From time to time make sure that the student is following you and understands you.
                    Break down the topic into smaller parts and teach the student one part at a time.
                    Keep your style of conversation {{ style }}.
                    Keep your responses short, like in a real voice conversation.
                    Do not include any special characters in your responses - this is a voice conversation.
              `,
        },
      ],
    },
    clientMessages: [],
    serverMessages: [],
  };
  return vapiAssistant;
};





