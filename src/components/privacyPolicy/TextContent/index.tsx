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
      text: 'Last modified: September 22, 2021',
      type: classes.abstract,
    },
    {
      text: 'Introduction',
      type: classes.underLine,
    },
    {
      text: 'This Bounce Privacy Policy (the “policy”) describes the specific policies and procedures we use to collect, utilize, disclose, share and protect your Personal Information when you visit the website https://www.Bounce.com/ (our "Website"). We refer to Bounce, collectively as (“Bounce” or "Company" or "We" or “Us”). Together with our Terms of Use Agreement, this Privacy Policy governs your use of our platform and services.',
      type: classes.normal,
    },
    {
      type: 'mixText',
      content: [
        {
          text: `At Bounce we are committed to the protection of our visitor’s, user’s and client’s (also referred to as “you” or “your”) privacy. We understand that keeping your information secure and confidential is critical to earning and keeping your trust. `,
          type: classes.normal,
        },
        {
          text: `Let us be clear – we do not rent, sell or trade Personal Information.`,
          type: classes.blod,
        },
      ],
    },
    {
      text: 'This policy applies to information we collect:',
      type: classes.abstract,
    },
    {
      text: 'On this Website',
      type: classes.li,
    },
    {
      text: 'In email, text, and other electronic messages between you and this Website.',
      type: classes.li,
    },
    {
      text: 'Through mobile and desktop applications you download from this Website, which provide dedicated non-browser-based interaction between you and this Website.',
      type: classes.li,
    },
    {
      text: 'Us offline or through any other means, including on any other website operated by Company or any third party (including our affiliates and subsidiaries); or',
      type: classes.li,
    },
    {
      text: 'Any third party (including our affiliates and subsidiaries), including through any application or content (including advertising) that may link to or be accessible from or on the Website.',
      type: classes.li,
    },
    {
      text: 'Please read this policy carefully to understand our policies and practices regarding your information and how we will treat it. If you do not agree with our policies and practices, you should not use this Website. By accessing or using this Website, you agree to this Privacy Policy. This policy may change from time to time (see Changes to Our Privacy Policy). Your continued use of this Website after we make changes is deemed to be acceptance of those changes, so please check the policy periodically for updates.',
      type: classes.li,
    },
    {
      text: '',
      type: classes.normal,
    },
    {
      text: 'Children Under the Age of 13',
      type: classes.underLine,
    },
    {
      text: 'Our Website is not intended for children under 13 years of age. No one under age 13 may provide any information to or on the Website. We do not knowingly collect personal information from children under 13. If you are under 13, do not use or provide any information on this Website or on or through any of its features. If we learn we have collected or received personal information from a child under 13 without verification of parental consent, we will delete that information. If you believe we might have any information from or about a child under 13, please contact us at: info@bounce.com',
      type: classes.normal,
    },
    {
      text: 'California Residents',
      type: classes.underLine,
    },
    {
      type: 'mixText',
      content: [
        {
          text: `Under California Civil Code Section 1798.83, California residents have the right to obtain certain information about the types of personal information that companies with whom they have an established business relationship (and that are not otherwise exempt) have shared with third parties for direct marketing purposes during the preceding calendar year, including the names and addresses of those third parties, and examples of the types of services or products marketed by those third parties.. If you are a California resident and (1) you wish to opt out; or (2) you wish to request certain information regarding our disclosure of your Personal Information to third parties for the direct marketing purposes, please send an e-mail to info@bounce.com. `,
          type: classes.normal,
        },
        {
          text: `However, please note that we do not currently sell data, nor do we share information with third parties in any way that would trigger the statute’s opt-out requirements.`,
          type: classes.blod,
        },
      ],
    },
    {
      text: 'Important Notices to Non-U.S. Residents',
      type: classes.underLine,
    },
    {
      text: 'The servers used in connection with the operation and use of the Website and Platform are operated in the United States and elsewhere. Please be aware that your Information, including, but not limited to, your Personal Information and Billing Information, may be transferred to, processed, maintained, and used on computers, servers, and systems located outside of your state, province, country, or other governmental jurisdiction where the privacy laws may not be as protective as those in your jurisdiction. If you are located outside the United States and choose to use the Platform or Website, you hereby consent to such transfer, processing, and use in the United States and elsewhere.',
      type: classes.normal,
    },
    {
      text: 'Information We Collect About You and How We Collect It',
      type: classes.underLine,
    },
    {
      text: 'We collect several types of information from and about users of our Website, including information:',
      type: classes.ul,
    },
    {
      text: 'By which you may be personally identified, such as name and email address ("personal information");',
      type: classes.li,
    },
    {
      text: 'That is about you but individually does not identify you; and/or',
      type: classes.li,
    },
    {
      text: 'About your internet connection, the equipment you use to access our Website, and usage details.',
      type: classes.li,
    },
    {
      text: 'When you attempt to complete the KYC process on the platform.',
      type: classes.li,
    },
    {
      text: '',
      type: classes.normal,
    },
    {
      text: 'Information You Provide to Us.',
      type: classes.underLine,
    },
    {
      text: 'The information we collect on or through our Website may include:',
      type: classes.ul,
    },
    {
      text: 'Information that you provide by filling in forms on our Website. This includes information provided at the time of registering to use our Website or subscribing to our service. We may also ask you for information when you report a problem with our Website.',
      type: classes.li,
    },
    {
      text: 'Records and copies of your correspondence (including email addresses), if you contact us.',
      type: classes.li,
    },
    {
      text: '',
      type: classes.normal,
    },
    {
      text: 'How We Use Your Information',
      type: classes.underLine,
    },
    {
      text: 'We use information that we collect about you or that you provide to us, including any personal information:',
      type: classes.ul,
    },
    {
      text: 'To present our Website and its contents to you.',
      type: classes.li,
    },
    {
      text: 'To provide you with information, products, or services that you request from us.',
      type: classes.li,
    },
    {
      text: 'To fulfill any other purpose for which you provide it.',
      type: classes.li,
    },
    {
      text: 'To carry out our obligations and enforce our rights arising from any contracts entered into between you and us, including for billing and collection.',
      type: classes.li,
    },
    {
      text: 'To notify you about changes to our Website or any products or services we offer or provide through it.',
      type: classes.li,
    },
    {
      text: 'In any other way we may describe when you provide the information.',
      type: classes.li,
    },
    {
      text: 'For any other purpose with your consent.',
      type: classes.li,
    },
    {
      text: '',
      type: classes.normal,
    },
    {
      text: 'Disclosure of Your Information',
      type: classes.underLine,
    },
    {
      text: 'We may disclose personal information that we collect, or you provide as described in this privacy policy:',
      type: classes.ul,
    },
    {
      text: 'To fulfill the purpose for which you provide it.',
      type: classes.li,
    },
    {
      text: 'For any other purpose disclosed by us when you provide the information.',
      type: classes.li,
    },
    {
      text: 'With your consent.',
      type: classes.ul,
    },
    {
      text: 'We may also disclose your personal information:',
      type: classes.ul,
    },
    {
      text: 'To comply with any court order, law, or legal process, including to respond to any government or regulatory request.',
      type: classes.li,
    },
    {
      text: 'If we believe disclosure is necessary or appropriate to protect the rights, property, or safety of Bounce, our customers, or others.',
      type: classes.li,
    },
    {
      text: '',
      type: classes.normal,
    },
    {
      text: 'Accessing and Correcting, Deleting or Updating Your Information',
      type: classes.underLine,
    },
    {
      text: '',
      type: classes.normal,
    },
    {
      text: 'You can review and change your personal information by logging into the Website and visiting your account profile page.',
      type: classes.normal,
    },
    {
      text: 'You may also send us an email at info@bounce.com to request access to, correct, or delete any personal information that you have provided to us. We cannot delete your personal information except by also deleting your user account. We may not accommodate a request to change information if we believe the change would violate any law or legal requirement or cause the information to be incorrect.',
      type: classes.normal,
    },
    {
      text: 'Data Security',
      type: classes.underLine,
    },
    {
      text: 'We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on our secure servers behind firewalls.',
      type: classes.normal,
    },
    {
      text: 'The safety and security of your information also depends on you. Where we have given you (or where you have chosen) a password for access to certain parts of our Website, you are responsible for keeping this password confidential. It is in your best interest to not share your password with anyone. We urge you to be careful about giving out information in public areas as information shared in public areas may be viewed by any user of the Website.',
      type: classes.normal,
    },
    {
      text: 'Unfortunately, the transmission of information via the internet is not without its risks. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our Website. Any transmission of personal information is at your own risk. We are not responsible for circumvention of any privacy settings or security measures contained on the Website.',
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
      text: 'Contact Information',
      type: classes.underLine,
    },
    {
      text: `To ask questions or comment about this privacy policy and our privacy practices, contact us at:info@bounce.com`,
      type: classes.normal,
    },
    {
      text: `If you have any complaints or concerns regarding our compliance with this Privacy Policy, please contact us first. We will investigate and attempt to resolve complaints and disputes regarding use and disclosure of personal information in accordance with this Privacy Policy and in accordance with applicable law.`,
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
                    return <span className={item.type}>{item.text}</span>;
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
