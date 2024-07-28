export const readingData = [
  {
    part: 1,
    passage: [
      { 
        text: "The advent of artificial intelligence (AI) has revolutionized various industries, from healthcare to finance. AI technologies are now capable of performing tasks that were once the sole domain of humans, such as diagnosing diseases and trading stocks. While the benefits of AI are immense, including increased efficiency and reduced human error, there are also significant ethical concerns.",
        paragraphId: 1
      },
      { 
        text: "One of the primary ethical concerns is data privacy. AI systems often require large amounts of data to function effectively, and this data is frequently personal or sensitive. There is a risk that this information could be misused or inadequately protected, leading to breaches of privacy.",
        paragraphId: 2
      },
      { 
        text: "Another major issue is job displacement. As AI systems become more advanced, they are able to perform tasks that were previously done by humans, potentially leading to job losses in certain sectors. This raises important questions about how to support workers who are displaced by technological advancements.",
        paragraphId: 3
      }
    ],
    questions: [
      {
        type: 'trueFalse',
        instruction: 'Choose TRUE if the statement agrees with the information given in the text, choose FALSE if the statement contradicts the information, or choose NOT GIVEN if there is no information on this.',
        title: "Artificial Intelligence Impact",
        questions: [
          {
            questionNo: 1,
            text: 'AI technologies can diagnose diseases.',
            answer: 'TRUE'
          },
          {
            questionNo: 2,
            text: 'AI has no impact on job displacement.',
            answer: 'FALSE'
          },
          {
            questionNo: 3,
            text: 'There are no ethical concerns with AI.',
            answer: 'NOT GIVEN'
          }
        ]
      },
      {
        type: 'fillInTheBlank',
        instruction: 'Complete the sentences. Write ONE WORD ONLY from the text for each answer.',
        title: "Artificial Intelligence Impact",
        questions: [
          {
            questionNo: 4,
            text: "AI technologies have revolutionized various {BLANK:4}.",
            answer: "industries"
          },
          {
            questionNo: 5,
            text: "AI can perform tasks such as diagnosing {BLANK:5}.",
            answer: "diseases"
          },
          {
            questionNo: 6,
            text: "AI raises important {BLANK:6} concerns.",
            answer: "ethical"
          }
        ]
      },
      {
        type: 'fillInParagraph',
        instruction: 'Complete the summary. Write ONE WORD ONLY from the text for each answer.',
        title: "Artificial Intelligence Impact",
        paragraph: `The advent of artificial intelligence (AI) has revolutionized various {BLANK:7}, from healthcare to finance. AI technologies are now capable of performing tasks that were once the sole domain of humans, such as diagnosing {BLANK:8} and trading stocks. While the benefits of AI are immense, including increased efficiency and reduced human error, there are also significant {BLANK:9} concerns. Issues such as data privacy, job displacement, and the potential for biased decision-making must be carefully managed as AI continues to {BLANK:10}.`,
        questions: [
          {
            questionNo: 7,
            answer: "industries"
          },
          {
            questionNo: 8,
            answer: "diseases"
          },
          {
            questionNo: 9,
            answer: "ethical"
          },
          {
            questionNo: 10,
            answer: "evolve"
          }
        ]
      },
      {
        type: 'mcq',
        option: 1,
        instruction: 'Choose the correct option.',
        questions: [
          {
            questionNo: 11,
            text: 'What is one of the primary ethical concerns mentioned in the passage?',
            options: [
              'A. Environmental impact',
              'B. Data privacy',
              'C. Political influence',
              'D. Cultural changes'
            ],
            answer: 'B'
          }
        ]
      },
      {
        type: 'mcq',
        option: 2,
        instruction: 'Choose TWO correct options.',
        questions: [
          {
            questionNos: { 12: null, 13: null },
            text: 'Which TWO of the following are mentioned as impacts of AI in the passage?',
            options: [
              'A. Increased efficiency',
              'B. Environmental protection',
              'C. Job displacement',
              'D. Cultural preservation'
            ],
            answer: ['A', 'C']
          }
        ]
      },
      {
        type: 'headingMatching',
        instruction: 'Choose the correct heading for paragraphs 1-3 from the list of headings below.',
        headings: [
          'A. Introduction to AI and its impact',
          'B. Benefits of AI in various sectors',
          'C. Ethical concerns surrounding AI',
          'D. Data privacy issues in AI systems',
          'E. Job displacement due to AI advancements',
          'F. Future prospects of AI technology'
        ],
        questions: [
          { questionNo: 14, paragraphId: 1, correctHeading: 'A' },
          // { questionNo: 15, paragraphId: 2, correctHeading: 'D' },
          { questionNo: 16, paragraphId: 3, correctHeading: 'E' }
        ]
      }
    ]
  },
  {
    part: 2,
    passage: [
      { 
        text: "Climate change is one of the most pressing issues of our time. It refers to long-term changes in temperature, precipitation, wind patterns, and other aspects of Earth's climate system. Human activities, particularly the burning of fossil fuels, deforestation, and industrial processes, have significantly contributed to the increase in greenhouse gases, leading to global warming.",
        paragraphId: 1
      },
      { 
        text: "The consequences of climate change include rising sea levels, more frequent and severe weather events, and disruptions to ecosystems and biodiversity. These changes pose significant challenges to human societies and natural systems, necessitating urgent action to mitigate and adapt to the impacts of climate change.",
        paragraphId: 2
      }
    ],
    questions: [
      {
        type: 'trueFalse',
        instruction: 'Choose TRUE if the statement agrees with the information given in the text, choose FALSE if the statement contradicts the information, or choose NOT GIVEN if there is no information on this.',
        title: "Climate Change Effects",
        questions: [
          {
            questionNo: 1,
            text: 'Climate change refers to short-term weather changes.',
            answer: 'FALSE'
          },
          {
            questionNo: 2,
            text: 'Human activities have contributed to the increase in greenhouse gases.',
            answer: 'TRUE'
          },
          {
            questionNo: 3,
            text: 'Rising sea levels are one consequence of climate change.',
            answer: 'TRUE'
          }
        ]
      },
      {
        type: 'fillInTheBlank',
        instruction: 'Complete the sentences. Write ONE WORD ONLY from the text for each answer.',
        title: "Climate Change Effects",
        questions: [
          {
            questionNo: 4,
            text: "Climate change refers to long-term changes in {BLANK:4}.",
            answer: "temperature"
          },
          {
            questionNo: 5,
            text: "Human activities, such as burning fossil fuels, have increased {BLANK:5} gases.",
            answer: "greenhouse"
          },
          {
            questionNo: 6,
            text: "The consequences {BLANK:6} of climate change include rising levels.",
            answer: "sea"
          }
        ]
      },
      {
        type: 'fillInParagraph',
        instruction: 'Complete the summary. Write ONE WORD ONLY from the text for each answer.',
        title: "Climate Change Effects",
        paragraph: `Climate change is one of the most pressing issues of our time. It refers to long-term changes in {BLANK:7}, precipitation, wind patterns, and other aspects of Earth's climate system. Human activities, particularly the burning of {BLANK:8} fuels, deforestation, and industrial processes, have significantly contributed to the increase in {BLANK:9} gases, leading to global warming. The consequences of climate change include rising sea levels, more frequent and severe {BLANK:10} events, and disruptions to ecosystems and {BLANK:11}.`,
        questions: [
          {
            questionNo: 7,
            answer: "temperature"
          },
          {
            questionNo: 8,
            answer: "fossil"
          },
          {
            questionNo: 9,
            answer: "greenhouse"
          },
          {
            questionNo: 10,
            answer: "weather"
          },
          {
            questionNo: 11,
            answer: "biodiversity"
          }
        ]
      },
      {
        type: 'mcq',
        option: 1,
        instruction: 'Choose the correct option.',
        questions: [
          {
            questionNo: 12,
            text: 'What is one of the significant consequences of climate change mentioned in the passage?',
            options: [
              'A. Improved agricultural yields',
              'B. Rising sea levels',
              'C. Enhanced biodiversity',
              'D. Stabilized weather patterns'
            ],
            answer: 'B'
          }
        ]
      },
      {
        type: 'mcq',
        option: 2,
        instruction: 'Choose TWO correct options.',
        questions: [
          {
            questionNos: { 13: null, 14: null },
            text: 'Which TWO of the following human activities have contributed to climate change according to the passage?',
            options: [
              'A. Deforestation',
              'B. Organic farming',
              'C. Industrial processes',
              'D. Water conservation',
              'E. Water conservation'
            ],
            answer: ['A', 'C']
          }
        ]
      },
      
    ]
  }
];
