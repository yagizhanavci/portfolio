import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

const languageWords = {
  english: [
    {
      time: 'June 2010',
      title: 'Graduated From Elementary School',
      text: 'I have graduated from Atatürk Elementary School at June 2011.',
    },
    {
      time: 'June 2014',
      title: 'Graduated From High School',
      text:
        'I have graduated from Izzet Baysal Anatolian High School at June 2014 with relatively good grade.',
    },
    {
      time: 'September 2014',
      title: 'Started University Education',
      text:
        'Started my university education at Düzce University at September2014. My major was Computer Engineering.',
    },
    {
      time: 'July 2017',
      title: 'Started My First Intern',
      text:
        'Started my first intern at Arçelik Company at July 2017. I have gained a lot of experience about business ethics and moralitythanks to being there.',
    },
    {
      time: 'June 2018',
      title: 'Started My Second Intern',
      text:
        'Started my second intern at Ajans360 Advertising Agency And Web Design at June 2018. Being allowed entering that company contributed to me a lot on the subjects of web design, web development, advertising and marketing.',
    },
    {
      time: 'January 2019',
      title: 'Graduated From University',
      text:
        'I have graduated from Düzce University with a grade of 2.88 out of 4.00. I have attended relatively good projects and events.',
    },
  ],
  turkish: [
    {
      time: 'Haziran 2010',
      title: 'İlkokuldan Mezun Oldum',
      text: "Haziran 2010 tarihinde Atatürk İlköğretim Okulu'ndan mezun oldum.",
    },
    {
      time: 'Haziran 2014',
      title: 'Liseden Mezun Oldum',
      text:
        "Haziran 2014 tarihinde İzzet Baysal Anadolu Lisesi'nden görece yüksek bir diploma puanı ile mezun oldum.",
    },
    {
      time: 'Eylül 2014',
      title: 'Üniversite Eğitimime Başladım',
      text:
        "Üniversite eğitimime Eylül 2014 tarihinde Düzce Üniversitesi'nde Bilgisayar Mühendisliği bölümünde başladım.",
    },
    {
      time: 'Temmuz 2017',
      title: 'Birinci Stajıma Başladım',
      text:
        'Temmuz 2017 tarihinde birinci stajıma Arçelik firmasında başladım. Burada bulunmamın sayesinde iş etiği ve ahlakı hakkında birçok tecrübe edindim.',
    },
    {
      time: 'Haziran 2018',
      title: 'İkinci Stajıma Başladım',
      text:
        'Haziran 2018 tarihinde ikinci stajıma Ajans360 Reklam Ajansı ve Web Tasarım firmasında başladım. Burada bulunmamın sayesinde web tasarım, web geliştiriciliği, reklamcılık ve pazarlama konularında birçok bilgi edindim.',
    },
    {
      time: 'Ocak 2019',
      title: 'Üniversiteden Mezun Oldum',
      text:
        'Düzce Üniversitesinde 4.00 üzerinden 2.88 ortalama ile mezun oldum. ;Nispeten iyi pek çok etkinliğe ve projeye katıldım.',
    },
  ],
};

const Resume = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div className='resume'>
      <div className='timeline'>
        {languageWords[language].map((activity, idx) => {
          return (
            <React.Fragment key={idx}>
              <div className='timeline-time'>
                <h3>{activity.time}</h3>
              </div>
              <div className='timeline-activity'>
                <h3 className='timeline-activity-title'>{activity.title}</h3>
                <p className='timeline-activity-content'>{activity.text}</p>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Resume;
