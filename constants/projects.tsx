import Link from 'next/link'

export const projectData = [
  {
    id: 1,
    category: 'Mobile Developement',
    title: 'LawSage',
    description: (
      <div>
        <p className="indent-20 text-justify xl:text-left">
          The Indian legal system has always been based on a large amount of
          complex legal documents, laws, and case rulings, making it hard for
          individuals to understand and navigate. Inspired by the latest
          developments in{' '}
          <Link
            href="https://en.wikipedia.org/wiki/Large_language_model"
            className="underline hover:underline-offset-4 dark:hover:text-accent"
            rel="noopener noreferrer"
            target="_blank"
          >
            Large Language Models (LLMs)
          </Link>{' '}
          space.
        </p>
        <p className="indent-20 text-justify xl:text-left">
          I{"'"}ve finetuned several well-known Large Language Models on Indian
          laws and regulations, relevant articles, legal advice Reddit threads,
          and other leagal text corpus using{' '}
          <Link
            href="https://huggingface.co/papers/2106.09685"
            className="underline hover:underline-offset-4 dark:hover:text-accent"
            rel="noopener noreferrer"
            target="_blank"
          >
            QLoRA
          </Link>{' '}
          technique. This finetuned models include Meta{"'"}s{' '}
          <Link
            href="https://huggingface.co/AdityaXPV/Llama-3-8b-Instruct-law-sage-v0.1/tree/main"
            className="underline hover:underline-offset-4 dark:hover:text-accent"
            rel="noopener noreferrer"
            target="_blank"
          >
            LLaMA-3-8b
          </Link>{' '}
          and{' '}
          <Link
            href="https://huggingface.co/AdityaXPV/llama-2-7b-law-sage-v0.3/tree/main"
            className="underline hover:underline-offset-4 dark:hover:text-accent"
            rel="noopener noreferrer"
            target="_blank"
          >
            LLaMA-2-7b
          </Link>
          , Mistral AI{"'"}s{' '}
          <Link
            href="https://huggingface.co/AdityaXPV/Mistral-7B-law-sage-v0.3/tree/main"
            className="underline hover:underline-offset-4 dark:hover:text-accent"
            rel="noopener noreferrer"
            target="_blank"
          >
            Mistral-7B
          </Link>{' '}
          model and other popular LLM models. These models, including their
          quantized versions, are available on my{' '}
          <Link
            href="https://huggingface.co/AdityaXPV"
            className="underline hover:underline-offset-4 dark:hover:text-accent"
            rel="noopener noreferrer"
            target="_blank"
          >
            Hugging Face profile
          </Link>
          . LawSage also includes{' '}
          <Link
            href="https://blogs.nvidia.com/blog/what-is-retrieval-augmented-generation/"
            className="underline hover:underline-offset-4 dark:hover:text-accent"
            rel="noopener noreferrer"
            target="_blank"
          >
            Retrieval-Augmented Generation (RAG)
          </Link>{' '}
          based chat interface. This chat interface uses a{' '}
          <Link
            href="https://huggingface.co/datasets/AdityaXPV/LawSage_RAG"
            className="underline hover:underline-offset-4 dark:hover:text-accent"
            rel="noopener noreferrer"
            target="_blank"
          >
            dataset
          </Link>{' '}
          that includes the Indian Constitution, Central Acts, and State Acts
          legislation, which I compiled into a text corpus and stored as vector
          embeddings for retrieval to use them as underlying context for
          generating responses.
        </p>
      </div>
    ),
    stack: [
      {name: 'React Native'},
      {name: 'llama.cpp'},
      {name: 'Transformers'},
      {name: 'ChromaDB'},
      {name: 'FastAPI'}
    ],
    content: [],
    images: [
      'https://firebasestorage.googleapis.com/v0/b/portfolio-assets-ba601.appspot.com/o/pictures%2FLawSage%2F1.png?alt=media&token=d88b7e1c-d9e0-4cc1-8d56-efb949d06577',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-assets-ba601.appspot.com/o/pictures%2FLawSage%2F2.png?alt=media&token=721ca54d-923a-47e1-819e-305eaada39b8',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-assets-ba601.appspot.com/o/pictures%2FLawSage%2F3.png?alt=media&token=ed20f73c-811f-4287-81a6-a8f2a8a80e0e',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-assets-ba601.appspot.com/o/pictures%2FLawSage%2F4.png?alt=media&token=4a7bc66b-88e8-4612-ac08-fc8790aa26be',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-assets-ba601.appspot.com/o/pictures%2FLawSage%2F5.png?alt=media&token=42fd4119-afe3-4267-93e6-214ab269430f'
    ],
    github: 'https://github.com/adityaxp/LawSageApp.git',
    video:
      'https://firebasestorage.googleapis.com/v0/b/portfolio-assets-ba601.appspot.com/o/videos%2FLawsageDemo.mp4?alt=media&token=48fa838c-de12-485f-9c85-e8975a8e2c34'
  },
  {
    id: 2,
    category: 'IoT Developement',
    title: 'RaspiCarV2',
    description: (
      <div>
        <p className="indent-20 text-justify xl:text-left">
          The RaspiCarV2 is a surveillance car prototype powered by a Raspberry
          Pi 3B+ and integrated with Firebase for cloud-based remote control. It
          can be controlled over Wi-Fi using a{' '}
          <Link
            href="https://github.com/adityaxp/RaspiCarV2/blob/master/Images/image5.png"
            className="underline hover:underline-offset-4 dark:hover:text-accent"
            rel="noopener noreferrer"
            target="_blank"
          >
            PyQt GUI client
          </Link>{' '}
          via a socket connection and over the internet through a{' '}
          <Link
            href="https://firebasestorage.googleapis.com/v0/b/portfolio-assets-ba601.appspot.com/o/videos%2Fmobile.mp4?alt=media&token=80ddad6f-2630-4f99-9854-dc9f2adb3f28"
            className="underline hover:underline-offset-4 dark:hover:text-accent"
            rel="noopener noreferrer"
            target="_blank"
          >
            mobile app
          </Link>
          .
        </p>
        <p className="indent-20 text-justify xl:text-left">
          The RaspiCarV2 utilizes an L298 motor driver to control the car{"'"}s
          motors for navigation. It features a 2MP camera that streams video
          feed at 720p resolution. An HC-SR04 ultrasonic sensor is used to
          detect and avoid obstacles. The car is powered by a 1200mAh Li-Po
          battery, providing 30 minutes of operational time.
        </p>
      </div>
    ),
    stack: [
      {name: 'Python'},
      {name: 'Java'},
      {name: 'Android SDK'},
      {name: 'PyQt5'},
      {name: 'Firebase'}
    ],
    content: [],
    images: [
      'https://firebasestorage.googleapis.com/v0/b/portfolio-assets-ba601.appspot.com/o/pictures%2FRaspiCarV2%2F1.jpg?alt=media&token=4b760b0d-088a-4824-a6d9-858225b895d7'
    ],
    github: 'https://github.com/adityaxp/RaspiCarV2.git',
    video:
      'https://firebasestorage.googleapis.com/v0/b/portfolio-assets-ba601.appspot.com/o/videos%2Fcar.mp4?alt=media&token=a5143056-441e-4ec9-9af2-6bc770bb8745'
  },
  {
    id: 3,
    category: 'Mobile Developement',
    title: 'DécorHub',
    description: (
      <div>
        <p className="indent-20 text-justify xl:text-left">
          DécorHub is a React Native application designed to enhance the
          furniture shopping experience.
        </p>
        <p className="indent-20 text-justify xl:text-left">
          DecorHub features a furniture category system to sort different items,
          a search function, and the ability for users to add furniture to their
          favorites. It includes a cart system for adding items and purchasing
          them, with payments processed through{' '}
          <Link
            href="https://docs.stripe.com/webhooks"
            className="underline hover:underline-offset-4 dark:hover:text-accent"
            rel="noopener noreferrer"
            target="_blank"
          >
            Stripe webhook
          </Link>{' '}
          endpoint.
        </p>
      </div>
    ),
    stack: [
      {name: 'React Native'},
      {name: 'Formik & Yup'},
      {name: 'Node.js'},
      {name: 'Express.js'},
      {name: 'MongoDB'},
      {name: 'Stripe'}
    ],
    content: [],
    images: [
      'https://github.com/adityaxp/DecorHub/raw/master/Images/4.jpeg',
      'https://github.com/adityaxp/DecorHub/blob/master/Images/7.jpeg?raw=true',
      'https://github.com/adityaxp/DecorHub/blob/master/Images/3.jpeg?raw=true',
      'https://github.com/adityaxp/DecorHub/blob/master/Images/10.jpeg?raw=true',
      'https://github.com/adityaxp/DecorHub/blob/master/Images/5.jpeg?raw=true',
      'https://github.com/adityaxp/DecorHub/blob/master/Images/9.jpeg?raw=true',
      'https://github.com/adityaxp/DecorHub/blob/master/Images/8.jpeg?raw=true',
      'https://github.com/adityaxp/DecorHub/blob/master/Images/1.jpeg?raw=true'
    ],
    github: 'https://github.com/adityaxp/DecorHub.git',
    video: ''
  },
  {
    id: 4,
    category: 'Mobile Developement',
    title: 'ShopLens',
    description: (
      <div>
        <p className="indent-20 text-justify xl:text-left">
          Shoplens is a self-checkout platform that allows users to purchase
          products without scanning them at the cashier. It features an
          integrated QR code scanner, enabling users to easily scan and add
          products to their cart or purchase them directly through the app.
          Additionally, Shoplens offers store owners an intuitive interface to{' '}
          <Link
            href="https://github.com/adityaxp/ShopLens/blob/master/Images/image10.png"
            className="underline hover:underline-offset-4 dark:hover:text-accent"
            rel="noopener noreferrer"
            target="_blank"
          >
            manage products
          </Link>
          ,{' '}
          <Link
            href="https://github.com/adityaxp/ShopLens/blob/master/Images/image12.png"
            className="underline hover:underline-offset-4 dark:hover:text-accent"
            rel="noopener noreferrer"
            target="_blank"
          >
            track sales
          </Link>
          , and more.
        </p>
      </div>
    ),
    stack: [
      {name: 'Java'},
      {name: 'Kotlin'},
      {name: 'Android SDK'},
      {name: 'Firebase'}
    ],
    content: [],
    images: [
      'https://github.com/adityaxp/ShopLens/blob/master/Images/image1.jpeg?raw=true',
      'https://github.com/adityaxp/ShopLens/blob/master/Images/image4.jpeg?raw=true',
      'https://github.com/adityaxp/ShopLens/blob/master/Images/image11.jpeg?raw=true',
      'https://github.com/adityaxp/ShopLens/blob/master/Images/image7.jpeg?raw=true',
      'https://github.com/adityaxp/ShopLens/blob/master/Images/image6.jpeg?raw=true',
      'https://github.com/adityaxp/ShopLens/blob/master/Images/image8.jpeg?raw=true',
      'https://github.com/adityaxp/ShopLens/blob/master/Images/image5.jpeg?raw=true',
      'https://github.com/adityaxp/ShopLens/blob/master/Images/image2.jpeg?raw=true'
    ],
    github: 'https://github.com/adityaxp/ShopLens.git',
    video: ''
  },
  {
    id: 5,
    category: 'Mobile Developement',
    title: 'Student Teacher App',
    description: (
      <div>
        <p className="indent-20 text-justify xl:text-left">
          The STA (Student Teacher App) is an application platform that provides
          an efficient and reliable way for students and teachers to interact
          with each other. The STA platform can be used for sharing study
          material, assignment submissions, assessments, and receiving various
          updates from the institute.
        </p>
      </div>
    ),
    stack: [
      {name: 'Java'},
      {name: 'Kotlin'},
      {name: 'Android SDK'},
      {name: 'Firebase'}
    ],
    content: [],
    images: [
      'https://firebasestorage.googleapis.com/v0/b/portfolio-assets-ba601.appspot.com/o/pictures%2FSTA%2F1.png?alt=media&token=e2ad61e7-84d7-4da8-a4d1-f3b0eda6c96a',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-assets-ba601.appspot.com/o/pictures%2FSTA%2F2.jpg?alt=media&token=35061762-65b0-4d8e-9786-626f5a182bbb',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-assets-ba601.appspot.com/o/pictures%2FSTA%2F3.jpg?alt=media&token=6451c151-5bfb-444b-bec7-930229d7169e',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-assets-ba601.appspot.com/o/pictures%2FSTA%2F4.jpg?alt=media&token=8c01b10c-bcb9-48cf-bdb6-f3287283ef7e',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-assets-ba601.appspot.com/o/pictures%2FSTA%2F5.jpg?alt=media&token=03ca840f-198b-4233-bfcd-73b1a9ddd167',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-assets-ba601.appspot.com/o/pictures%2FSTA%2F6.jpg?alt=media&token=70b1de57-5970-4f14-b5d4-40d33c8bf35e',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-assets-ba601.appspot.com/o/pictures%2FSTA%2F7.png?alt=media&token=4de284a6-e1a8-427a-991f-2bcbbec4ac7f',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-assets-ba601.appspot.com/o/pictures%2FSTA%2F8.jpg?alt=media&token=0a6d07c0-cd44-46b6-96fa-19897995a296',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-assets-ba601.appspot.com/o/pictures%2FSTA%2F9.jpg?alt=media&token=e02e7673-210b-4e23-8357-eba459eeaf2a',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-assets-ba601.appspot.com/o/pictures%2FSTA%2F10.jpg?alt=media&token=e7beee0c-d775-42b4-90b8-ef23fef7878b',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-assets-ba601.appspot.com/o/pictures%2FSTA%2F11.jpg?alt=media&token=aa253c80-aa82-4749-a63b-568e50f963bc',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-assets-ba601.appspot.com/o/pictures%2FSTA%2F12.jpg?alt=media&token=caaccea6-b91e-401c-b63d-dd1e86f64657',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-assets-ba601.appspot.com/o/pictures%2FSTA%2F13.jpg?alt=media&token=124968d4-d91a-4e55-b099-9d6928095968'
    ],
    github: 'https://github.com/adityaxp/STA.git',
    video: ''
  }
]
