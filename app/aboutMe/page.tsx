'use client'

import {motion, useInView, useAnimation} from 'framer-motion'
import React, {useState, useRef, useEffect} from 'react'

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaAndroid,
  FaPython,
  FaJava,
  FaPhp,
  FaGit
} from 'react-icons/fa'

import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiKotlin,
  SiOpencv,
  SiMysql,
  SiFirebase,
  SiMongodb,
  SiSupabase,
  SiArduino,
  SiAdobephotoshop
} from 'react-icons/si'

import {DiRasberryPi} from 'react-icons/di'

import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

import {ScrollArea} from '@/components/ui/scroll-area'

import ExpoSvg from '../../public/assets/icons/exposvg'

const aboutData = {
  title: 'About me',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam earum, nam a, architecto consectetur dicta autem, doloremque atque porro natus quia sunt aliquam ratione aliquid minima itaque obcaecati consequuntur soluta!',
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Aditya Balsane'
    },
    {
      fieldName: 'Experience',
      fieldValue: '1+ Years'
    },
    {
      fieldName: 'Phone',
      fieldValue: '(+91) 94032 99428'
    },
    {
      fieldName: 'Email',
      fieldValue: 'adityabalsane.devmail@gmail.com'
    }
  ]
}

const experienceData = {
  icon: '../../public/assets/icons/badge.svg',
  title: 'My experience',
  description:
    'I have contributed to the development of end-to-end applications with multiple teams, working across various technologies. Additionally, I have contributed as a research assistant on a research project at my institute.',
  items: [
     {
      company: 'One800',
      position: 'Mobile Application Developer',
      duration: 'Sept 2024 - Present',
      location: 'Bengaluru, Karnataka, India · On-site'
    },
    {
      company: 'Stealth Startup',
      position: 'React Native Developer (Freelance Work)',
      duration: 'Nov 2023 - Apr 2024',
      location: 'Missouri, United States · Remote'
    },
    {
      company: 'SecqurAIse Technologies',
      position: 'Android Development Intern',
      duration: 'Mar 2023 - Jul 2023',
      location: 'Chennai, Tamil Nadu, India · Remote'
    },
    {
      company: 'K.K.Wagh institute of Engineering Education & Research',
      position: 'Research Intern (Image Processing)',
      duration: 'Feb 2023 - Mar 2023',
      location: ' Nasik, Maharashtra, India'
    }
  ]
}

const educationData = {
  icon: '../../public/assets/icons/cap.svg',
  title: 'My education',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam earum, nam a, architecto consectetur dicta autem, doloremque atque porro natus quia sunt aliquam ratione aliquid minima itaque obcaecati consequuntur soluta!',
  items: [
    {
      institution: 'Savitribai Phule Pune University',
      degree: 'Bachelor of Engineering: Computer Engineering',
      grade: 'CGPA : 8.76/10',
      duration: '2021 - 2024'
    },
    {
      institution: 'Maharashtra State Board of Technical Education',
      degree: 'Diploma in Computer Engineering',
      grade: 'Percentage: 95/100',
      duration: '2018 - 2021'
    }
  ]
}

const skillsData: any = {
  title: 'My skills',
  description:
    "I'm proficient in mobile development, alongside a background in web development. Additionally, I enjoy tinkering with embedded systems and IoT devices.",
  skillList: {
    languages: [
      {
        icon: <FaJava />,
        name: 'Java'
      },
      {
        icon: <SiKotlin />,
        name: 'Kotlin'
      },
      {
        icon: <FaJs />,
        name: 'JavaScript'
      },
      {
        icon: <SiTypescript />,
        name: 'TypeScript'
      },
      {
        icon: <FaPython />,
        name: 'Python'
      },
      {
        icon: <FaPhp />,
        name: 'PHP'
      }
    ],
    appDev: [
      {
        icon: <FaAndroid />,
        name: 'Android'
      },
      {
        icon: <FaReact />,
        name: 'React-Native'
      },
      {
        icon: <ExpoSvg />,
        name: 'Expo'
      }
    ],
    webDev: [
      {
        icon: <FaHtml5 />,
        name: 'HTML5'
      },
      {
        icon: <FaCss3 />,
        name: 'CSS3'
      },
      {
        icon: <SiTailwindcss />,
        name: 'Tailwind'
      },
      {
        icon: <FaReact />,
        name: 'React'
      },
      {
        icon: <SiNextdotjs />,
        name: 'NextJS'
      }
    ],
    database: [
      {
        icon: <SiMysql />,
        name: 'MySQL'
      },
      {
        icon: <SiMongodb />,
        name: 'MongoDB'
      },
      {
        icon: <SiFirebase />,
        name: 'Firebase'
      },
      {
        icon: <SiSupabase />,
        name: 'Supabase'
      }
    ],
    misc: [
      {
        icon: <FaGit />,
        name: 'Git'
      },
      {
        icon: <SiOpencv />,
        name: 'OpenCV'
      },
      {
        icon: <FaFigma />,
        name: 'Figma'
      },
      {
        icon: <SiAdobephotoshop />,
        name: 'Adobe Photoshop'
      },
      {
        icon: <DiRasberryPi />,
        name: 'RasberryPi'
      },
      {
        icon: <SiArduino />,
        name: 'Arduino'
      }
    ]
  }
}
const AboutMe = () => {
  const handleSelect = (value: string) => {
    setSkillType(value)
  }

  const [skillType, setSkillType] = useState<string>('languages')
  const ref = useRef(null)
  const isInView = useInView(ref, {once: true})
  const animControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      animControls.start('visible')
    }
  }, [isInView])

  return (
    <section className="h-full mb-5">
      <motion.div
        ref={ref}
        variants={{hidden: {opacity: 0, x: -75}, visible: {opacity: 1, x: 0}}}
        initial="hidden"
        animate={animControls}
        transition={{delay: 0.5, duration: 0.4, ease: 'easeOut'}}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
      >
        <div className="container mx-auto">
          <Tabs
            defaultValue="experience"
            className="flex flex-col xl:flex-row gap-[60px]"
          >
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
            </TabsList>

            {/* content */}
            <div className="min-h-[70vh] w-full">
              <TabsContent value="experience" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold hover:text-accent-hover text-stroke-1 dark:text-white dark:hover:text-accent">
                    {experienceData.title}
                  </h3>
                  <p className="max-w-[600px] text-black dark:text-white/60 mx-auto xl:mx-0">
                    {experienceData.description}
                  </p>
                  <ScrollArea className="h-[500px] xl:h-[535px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {experienceData.items.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="border border-black dark:border-none dark:bg-offblack h-[250px] px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          >
                            <span className="hover:scale-105 dark:text-accent">
                              {item.duration}
                            </span>
                            <h3 className="text-xl dark:text-white hover:scale-105 max-w-[260px] min-h-[60px] text-center lg:text-left">
                              {item.position}
                            </h3>
                            <div className="flex items-center gap-3 my-2">
                              {/* <span className="w-[6px] h-[6px] rounded-full bg-accent" /> */}
                              <p className="text-sm hover:scale-125 dark:text-white/60 lg:text-left px-1">
                                {item.company}
                              </p>
                            </div>
                            <div className="flex items-center gap-3">
                              {/* <span className="w-[6px] h-[6px] rounded-full bg-accent"></span> */}
                              <p className="text-sm hover:scale-125 dark:text-white/60 lg:text-left  px-1">
                                {item.location}
                              </p>
                            </div>
                          </li>
                        )
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              <TabsContent value="education" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold hover:text-accent-hover text-stroke-1 dark:text-white dark:hover:text-accent">
                    {educationData.title}
                  </h3>
                  {/* <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {educationData.description}
                </p> */}
                  <ScrollArea className="h-[480px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {educationData.items.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="border border-black dark:border-none dark:bg-offblack h-[250px] px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          >
                            <span className="hover:scale-105 dark:text-accent">
                              {item.duration}
                            </span>
                            <h3 className="text-lg dark:text-white hover:scale-105 max-w-[260px] min-h-[60px] text-center lg:text-left">
                              {item.degree}
                            </h3>
                            <div className="flex items-center gap-3 my-2">
                              {/* <span className="w-[6px] h-[6px] rounded-full bg-accent" /> */}
                              <p className="text-sm hover:scale-125 dark:text-white/60 lg:text-left px-1">
                                {item.institution}
                              </p>
                            </div>
                            <div className="flex items-center gap-3">
                              {/* <span className="w-[6px] h-[6px] rounded-full bg-accent" /> */}
                              <p className="text-sm hover:scale-125 dark:text-white/60 lg:text-left  px-1">
                                {item.grade}
                              </p>
                            </div>
                          </li>
                        )
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              <TabsContent value="skills" className="w-full">
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold hover:text-accent-hover text-stroke-1 dark:text-white dark:hover:text-accent">
                      {skillsData.title}
                    </h3>
                    <p className="max-w-[600px] text-black dark:text-white/60 mx-auto xl:mx-0">
                      {skillsData.description}
                    </p>
                  </div>
                  <Select onValueChange={handleSelect}>
                    <SelectTrigger className="w-[180px] ">
                      <SelectValue
                        placeholder={`${skillType
                          .charAt(0)
                          .toUpperCase()}${skillType.slice(1)}`}
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="languages">Languages</SelectItem>
                        <SelectItem value="appDev">App Development</SelectItem>
                        <SelectItem value="webDev">Web Development</SelectItem>
                        <SelectItem value="database">Database</SelectItem>
                        <SelectItem value="misc">Misc.</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skillsData.skillList[skillType].map(
                      (skill: any, index: any) => {
                        return (
                          <li key={index}>
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger className="w-full h-[150px] border border-black dark:bg-offblack rounded-xl flex justify-center items-center group">
                                  <div className="text-6xl dark:text-white group-hover:text-lightblack transition-all duration-300">
                                    {skill.icon}
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent>{skill.name}</TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </li>
                        )
                      }
                    )}
                  </ul>
                </div>
              </TabsContent>
              <TabsContent
                value="about"
                className="w-full text-center xl:text-left"
              >
                <div>
                  <h3 className="text-4xl font-bold">{aboutData.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 my-5">
                    {aboutData.description}
                  </p>
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                    {aboutData.info.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="flex items-center justify-center xl:justify-start gap-4"
                        >
                          <span className="text-white/60">
                            {item.fieldName}:
                          </span>
                          <span className="text-lg">{item.fieldValue}</span>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </motion.div>
    </section>
  )
}

export default AboutMe
