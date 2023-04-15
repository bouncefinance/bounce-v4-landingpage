import { Typography, Box } from '@material-ui/core';
import React from 'react';
import { WithAnimation } from 'src/modules/WithAnimation';
import { useTextContentStyles } from './useTextContentStyles';
const TextContent: React.FC = () => {
  const classes = useTextContentStyles();
  const textData = [
    {
      text: 'Bounce Privacy Policy',
      type: classes.title,
    },
    {
      text: 'Last modified: April 1st, 2023',
      type: classes.abstract,
    },
    {
      text: 'Introduction',
      type: classes.underLine,
    },
    {
      type: 'mixText',
      content: [
        {
          text: `This Bounce Privacy Policy (the “Privacy Policy”) describes how we collect, use, disclose, and seek to protect your Personal Information when you use the website https://www.Bounce.finance/ and the platform and services available therein (our "Website"). In this Privacy Policy, we refer to Bounce DAO Ltd. and its parent companies, subsidiaries and affiliated entities Bounce, collectively as “Bounce” or "Company" or "We" or “Us”. This Privacy Policy forms part of our Terms of Use (`,
          type: classes.normal,
        },
        {
          text: `available here`,
          type: classes.openLink,
          link: '/termsOfService'
        },
        {
          text: `) and together with the Terms of Use governs your use of our Website.  `,
          type: classes.normal,
        },
        {
          text: `If you do not agree with this Privacy Policy or Our Terms of Use, please do not use the Website.`,
          type: classes.blod,
        },
        {
          text: `This policy may change from time to time (see Changes to Our Privacy Policy). Your continued use of this Website after we make changes is deemed to be acceptance of those changes, so please check the policy periodically for updates.`,
          type: classes.normal,
        },
      ],
    },
    {
      type: 'mixText',
      content: [
        {
          text: `At Bounce we respect the privacy of our visitors’, users’, and clients’ (also referred to as “you” or “your”) privacy. `,
          type: classes.normal,
        },
        {
          text: `Let us be clear – we do not rent, sell or trade the Personal Information we have collected about our users.`,
          type: classes.blod,
        },
      ],
    },
    {
      text: 'For purposes of this Privacy Policy, “Personal Information” is any information that identifies, relates to, or describes, directly or indirectly, an individual or household.  This Privacy Policy applies to Personal Information we collect:',
      type: classes.normal,
    },
    // {
    //   text: 'This policy applies to information we collect:',
    //   type: classes.abstract,
    // },
    {
      text: 'When you access or use the Website',
      type: classes.li,
    },
    {
      text: 'In email, text, and other electronic messages between you and us regarding the Website.',
      type: classes.li,
    },
    {
      text: 'Through mobile and desktop applications you download from the Website, which provide dedicated non-browser-based interaction between you and the Website.',
      type: classes.li,
    },
    {
      text: 'Offline or through any other means, including on any other website operated by Company or any third party;',
      type: classes.li,
    },
    {
      text: 'From any third party, including through any application or content (including advertising) that may link to or be accessible from or on the Website.',
      type: classes.li,
    },
    {
      text: '',
      type: classes.normal,
    },
    {
      text: 'Information We Collect About You and How We Collect It',
      type: classes.underLine,
    },
    {
      text: 'We collect several types of information from and about users of our Website, including:',
      type: classes.normal,
    },
    {
      text: 'Identifiers and contact information you provide, like your name and email address;',
      type: classes.li,
    },
    {
      text: 'Anonymous identifiers transmitted to the Website when you access our networks and computers, like IP address (from which we may infer general location information like country or region) and information about your internet connection, the equipment, devices, and browser settings used to access the Website;',
      type: classes.li,
    },
    {
      text: 'Anonymous information about website traffic and how users interact with the Website;',
      type: classes.li,
    },
    {
      text: ``,
      type: classes.normal,
    },
    {
      text: `If you create an account with us or with one of the services offered on the Website, we will collect the information you create or provide in association with your account (in addition to the information described above), which may include:`,
      type: classes.normal,
    },
    {
      text: 'Account log-in credentials for accessing any account you create with us;',
      type: classes.li,
    },
    {
      text: 'Identity verification information (such as KYC process information) you provide in connection with securing your account;',
      type: classes.li,
    },
    {
      text: 'Location information (such as country of residence), employment or professional details, and social media links or other identifiers you provide as part of your account profile.',
      type: classes.li,
    },
    {
      text: `Other information we collect when you use or interact with the Website:`,
      type: classes.normal,
    },
    {
      text: 'Information that you provide by filling in forms on our Website. This includes information provided at the time of registering to use our Website, creating an account, or subscribing to a service offered through the Website;',
      type: classes.li,
    },
    {
      text: 'Information you provide or that is generated by your use of the Website’s services;',
      type: classes.li,
    },
    {
      text: 'Information you provide when communicating with us (records of correspondence, information you provide when reporting a problem).',
      type: classes.li,
    },
    {
      text: ``,
      type: classes.normal,
    },
    {
      text: 'How We Use and Disclose Your Information',
      type: classes.underLine,
    },
    {
      text: `We seek to limit our processing of Personal Information and other information we collect as appropriate for the performance of typical business and commercial purposes relation to the operation, maintenance and protection of the Website, and the provision of the services provided therein. These purposes include:`,
      type: classes.normal,
    },
    {
      text: 'To present our Website and its contents to you;',
      type: classes.li,
    },
    {
      text: 'To provide you with information, products, or services that you request from us, including the maintenance of any account or profile you create;',
      type: classes.li,
    },
    {
      text: 'To respond to your inquiries and other communications;',
      type: classes.li,
    },
    {
      text: 'To perform necessary and industry-appropriate auditing, security, and anti-fraud functions;',
      type: classes.li,
    },
    {
      text: 'To notify you about changes to our Website or any products or services we offer or provide through it;',
      type: classes.li,
    },
    {
      text: 'To carry out our obligations and enforce our rights arising from any contracts entered into between you and us, including for billing and collection;',
      type: classes.li,
    },
    {
      text: 'To complete a transaction permitted by law or contract as part of a merger, acquisition, financing due diligence, reorganization, bankruptcy, receivership, sale of assets;',
      type: classes.li,
    },
    {
      text: 'To comply with legal requirements or to participate in the legal process, including compliance with lawfully issued and appropriate requests from law enforcement, courts, our advisors, attorneys, or others;',
      type: classes.li,
    },
    {
      text: 'As necessary or appropriate to protect us, you, or others;',
      type: classes.li,
    },
    {
      text: 'In any other way we may describe when you provide the information;',
      type: classes.li,
    },
    {
      text: 'For any other purpose with your consent.',
      type: classes.li,
    },
    {
      text: ``,
      type: classes.normal,
    },
    {
      text: 'Third Party Sites and Services',
      type: classes.underLine,
    },
    {
      type: 'mixText',
      content: [
        {
          text: `The Website may contain links to third party websites and services and may collaborate with third parties who provide related services. For example, Bounce works with third-party vendors to facilitate users’ participation in those vendors’ token and NFT auctions and other transactions.`,
          type: classes.normal,
        },
        {
          text: `We do not endorse or control and are not responsible for the policies and practices of third parties and third-party websites. We make no representations, guarantees, or warranties about the security and privacy of your information on other sites.`,
          type: classes.blod,
        },
        {
          text: `Third parties’ privacy policies and terms of use may differ from ours. We urge you to carefully read the privacy policy of any site or service you access in order to understand its specific privacy and information usage practices.`,
          type: classes.normal,
        },
      ],
    },
    {
      text: ``,
      type: classes.normal,
    },
    {
      text: 'Additional Terms',
      type: classes.underLine,
    },
    {
      text: `This Privacy Policy may be supplemented by additional terms, privacy statements or notices that explain how we or our partners may collect and process information (including Personal Information) in specific circumstances (“Additional Terms”). For example, if you participate in a specific service offered in collaboration with a third-party partner, like the auction of a real-world asset, Additional Terms may be disclosed to you when you use that service that govern your use of that service.`,
      type: classes.normal,
    },
    {
      text: ``,
      type: classes.normal,
    },
    {
      text: 'Accessing, Correcting, Deleting or Updating Your Information',
      type: classes.underLine,
    },
    {
      text: `If you have an account with Bounce, you can review and make changes to your account information by logging into the Website and visiting your account profile page.`,
      type: classes.normal,
    },
    {
      text: `You may also send us an email at contact@bounce.community to request access to, correct, or delete any personal information that you have provided to us. We may request additional information in order to verify your identity and locate information relevant to your request. In some circumstances, we may be unable to delete your personal information except by also deleting your user account. We may not accommodate a request to change information if we believe the change would violate any law or legal requirement or cause the information to be incorrect.`,
      type: classes.normal,
    },
    {
      text: ``,
      type: classes.normal,
    },
    {
      text: 'Data of or Relating to Children and Minors',
      type: classes.underLine,
    },
    {
      text: `Our Website is not intended for use by individuals who have not attained the age of majority. Persons under the age of majority in their place of residence are not eligible to use the Website, and we do not knowingly collect or store any Personal Information from such persons. If we learn that we have collected or received personal information from someone who is ineligible to use the Website, we will take appropriate steps to delete that information in a timely fashion. To report ineligible use of the Website, please contact us at contact@bounce.community.`,
      type: classes.normal,
    },
    {
      text: ``,
      type: classes.normal,
    },
    {
      text: 'Consent to Processing and Transfer of Information',
      type: classes.underLine,
    },
    {
      text: `The servers and networks used in connection with the operation and use of the Website are operated in the United States and elsewhere. Please be aware that information about you, including but not limited to Personal Information, may be transferred to, processed, maintained, and used on computers, servers, and systems located outside of your state, province, country, or otherwise to a governmental jurisdiction where the privacy laws may not be as protective as those in your jurisdiction. If you are located outside the United States and choose to use the Website, you hereby consent to such transfer, processing, and use in the United States and elsewhere.`,
      type: classes.normal,
    },
    {
      text: ``,
      type: classes.normal,
    },
    {
      text: 'Data Security and User Responsibility for Password Confidentiality',
      type: classes.underLine,
    },
    {
      text: `We maintain procedural, technical, and physical safeguards to help protect against loss, misuse or unauthorized access, disclosure, alteration, or destruction of Personal Information. Unfortunately, no transmission of data is guaranteed to be completely secure. It may be possible for third parties not under our control to intercept or access transmissions or private communications unlawfully. Therefore, any transmission of Personal Information to us is made at your own risk. If you believe that your interaction with us is no longer secure, please notify us using the contact details below.`,
      type: classes.normal,
    },
    {
      text: `The safety and security of your information also depends on you. Where we have given you (or where you have chosen) a password for access to certain parts of our Website, you are responsible for keeping this password confidential. It is in your best interest to not share your password with anyone.`,
      type: classes.normal,
    },
    {
      text: ``,
      type: classes.normal,
    },
    {
      text: 'Changes to Our Privacy Policy',
      type: classes.underLine,
    },
    {
      text: `It is our policy to post any changes we make to our privacy policy on this page. If we make material changes to how we treat our users' personal information, we will notify you by email to the primary email address specified in your account. The date the privacy policy was last revised is identified at the top of the page. You are responsible for ensuring we have an up-to-date active and deliverable email address for you, and for periodically visiting our Website and this privacy policy to check for any changes.`,
      type: classes.normal,
    },
    {
      text: ``,
      type: classes.normal,
    },
    {
      text: 'Contact Information',
      type: classes.underLine,
    },
    {
      text: `To ask questions or comment about this privacy policy or to make a complaint, please contact us at: contact@bounce.community.`,
      type: classes.normal,
    },
    {
      text: ``,
      type: classes.normal,
    },
    {
      text: ``,
      type: classes.normal,
    },
    {
      text: ``,
      type: classes.normal,
    },
  ];
  return (
    <div className={classes.root}>
      {textData.map(v => {
        if (v.type !== 'mixText') {
          return (
            <WithAnimation>
              <Typography className={v.type}>{v.text}</Typography>
            </WithAnimation>
          );
        } else {
          return (
            <WithAnimation>
              <Box className={classes.maxText}>
                {Array.isArray(v.content) &&
                  v.content.length &&
                  v.content.map(item => {
                    if (item.type === classes.openLink) {
                      return (
                        <span
                          className={item.type}
                          onClick={() => {
                            item?.link && window.open(item?.link, '_blank');
                          }}
                        >
                          {item.text}
                        </span>
                      );
                    } else {
                      return <span className={item.type}>{item.text}</span>;
                    }
                  })}
              </Box>
            </WithAnimation>
          );
        }
      })}
    </div>
  );
};

export default TextContent;
