

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


// Project > Components > CompanionForm.tsx

import React from 'react'

const CompanionForm = () => {
  return (
    <div>
      
    </div>
  )
}

export default CompanionForm

