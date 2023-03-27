import { Typography, Box } from '@material-ui/core';
import React from 'react';
import { WithAnimation } from 'src/modules/WithAnimation';
import { useTextContentStyles } from './useTextContentStyles';
const TextContent: React.FC = () => {
  const classes = useTextContentStyles();
  const textData = [
    {
      text: 'Bounce Terms of Use Agreement',
      type: classes.title,
    },
    {
      text: 'Effective date: Sep 22, 2021',
      type: classes.abstract,
    },
    {
      text: 'Welcome to Bounce, a platform that powers an ecosystem of products for auctions. Build, design, connect, collect and trade all kinds of assets, tokens and NFTs across multiple blockchains.',
      type: classes.subTitle,
    },
    {
      text: `1. Contract Structure & Order-Of-Precedence`,
      type: classes.normal,
    },
    {
      text: `This Bounce Terms of Use (“Agreement”) is entered into between Bounce Inc., (“Bounce”) and the customer (“Customer”). Capitalized terms in this agreement are defined in Section 15 (Definitions) and elsewhere in this Agreement. Customer and Bounce may be referred to in this Agreement individually as a “Party” and collectively as the “Parties.” By accessing or using Bounce’s website (“Website”) or the content provided on or through the Website, Customer agrees to follow and be bound by the following terms and conditions concerning Customer’s access to and use of the Website and the content provided on or through the Website and Bounce’s Privacy Policy. Bounce may revise and update these Terms of Use from time to time in its sole discretion. All changes are effective immediately when posted to the Website and apply to all access to and use of the Website thereafter. However, any changes to the dispute resolution provisions set out in the Governing Law and Jurisdiction will not apply to any disputes for which the parties have actual notice on or before the date the change is posted on the Website.`,
      type: classes.normal,
    },
    {
      text: `2. Description of our Services`,
      type: classes.normal,
    },
    {
      text: `Bounce is a platform that powers an ecosystem of arts for auctions. Build, design, connect, collect and trade all kinds of arts across multiple blockchains.`,
      type: classes.normal,
    },
    {
      text: ' Multi wallet support',
      type: classes.underLine,
    },
    {
      text: ' The Bounce platform works with the most commonly used cryptocurrency wallets, such as MetaMask, Binance Chain wallet, WalletConnect, Coinbase Wallet, Ledger and Trezor. More wallets will be supported in the future.',
      type: classes.normal,
    },
    {
      text: 'Multi chain support',
      type: classes.underLine,
    },
    {
      text: 'The Bounce web app is available for Ethereum and Binance Smart Chain based arts. Once connected to a wallet, users can toggle between the Ethereum and Binance Smart Chain mainnet networks.',
      type: classes.normal,
    },
    {
      text: '3. Ownership of Service and Customer Data',
      type: classes.normal,
    },
    {
      text: '3.1 Intellectual Property.',
      type: classes.underLine,
    },
    {
      text: 'The technology and content used to offer, or provided in connection with, our Platform and Website, including the software, text, displays, images, video, and audio, and the design, selection and arrangement thereof, are exclusively owned by Bounce Inc., its licensors or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret and other intellectual property or proprietary rights laws.',
      type: classes.normal,
    },
    {
      text: '    3.2 Customer Data and Privacy.',
      type: classes.underLine,
    },
    {
      text: `Bounce ensures apps utilize the latest version of Docker containers that carry with them up-to-date security patches. Containers are segregated within a host using namespaces; it is not possible for containers to communicate between namespaces, even when on the same host. Bounce does not log anything sensitive to user privacy at all. However, in some cases we add an engineer of one of our clients to our Key Management System (KMS) GitHub repo to ensure that any key can be passed to our client safely. We will ultimately supply two ways for manage our clients’ key info: (1) via SDK; and 2) by managing key on the web manage system (available by Sep 2021).`,
      type: classes.normal,
    },
    {
      text: `4. Grant of Rights`,
      type: classes.normal,
    },
    {
      text: `Subject to the terms and conditions of this Agreement, Bounce hereby grants to Customer the non-exclusive, non-transferable (except as specified in Section 13.8 (Assignment)), worldwide, royalty-free right to access and use the Service to develop, launch and manage Nodes solely for Customer’s own internal business purposes subject to the terms and conditions of this Agreement.`,
      type: classes.normal,
    },
    {
      text: `5. Customer Responsibilities`,
      type: classes.normal,
    },
    {
      text: '5.1 Customer Responsibilities.',
      type: classes.underLine,
    },
    {
      text: `Customer is responsible for all activity occurring under Customer’s accounts, and for complying with all laws and regulations applicable to Customer’s use of the Service. Customer also must (a) notify Bounce promptly upon becoming aware of any unauthorized use of any Customer password or account (or any other breach of security of the Service), and (b) notify Bounce promptly upon becoming aware of, and make a reasonable effort to stop, any unauthorized copying, distribution or misuse of any aspect of the Service.`,
      type: classes.normal,
    },
    {
      text: '5.2 Use Restrictions.',
      type: classes.underLine,
    },
    {
      text: `Customer must not, without Bounce’s prior written consent, cause or permit the: (a) use, copying, modification, rental, lease, sublicense, transfer, or other commercial exploitation of, or other third party access to, any element of the Service, except to the extent expressly permitted by this Agreement; (b) creation of any modifications or derivative works of the Service; (c) reverse engineering of the Service; (d) gaining of unauthorized access to the Service or its related systems or networks; (e) interference with or disruption of the integrity or performance of the Service or the data contained therein.`,
      type: classes.normal,
    },
    {
      text: `Sale service on Bounce is only open to non-U.S. persons and entities. All registrants must meet eligibility requirements to participate.`,
      type: classes.normal,
    },
    {
      text: `Sale service on Bounce is not and will not be offered or sold, directly or indirectly, to any person who is a resident, organized, or located in any country or territory subject to OFAC comprehensive sanctions programs from time to time, including Cuba, Crimea region of Ukrain, Democratic people’s Republic of Korea, Iran, Syria, any person found on the OFAC specially designated nationals, blocked persons list, any other consolidated prohibited persons list as determined by any applicable governmental authority.`,
      type: classes.normal,
    },
    {
      text: `6. Privacy`,
      type: classes.normal,
    },
    {
      text: `At Bounce we are concerned about Customer privacy and we have developed a policy to address any privacy concerns Customer may have. For more information, please see Bounce’s Privacy Policy. At Bounce we do not collect any Personally Identifiable Information about our users unless a user voluntarily provides that information. Information from a user is only collected when they voluntarily fill out a form on our website. This information is treated as personal and kept confidential, it is collected in order to help Bounce fulfill Customer’s requests. Bounce will not sell, share, or rent information to any third-party.`,
      type: classes.normal,
    },
    {
      text: `7. Term/Termination`,
      type: classes.normal,
    },
    {
      text: '7.1 Term of Agreement.',
      type: classes.underLine,
    },
    {
      text: `This Agreement will begin on the Effective Date and will continue in perpetuity with full-force and effect until terminated.`,
      type: classes.normal,
    },
    {
      text: '7.2 Termination of Use.',
      type: classes.underLine,
    },
    {
      text: `Bounce may, in its sole discretion, at any time discontinue providing or limit access to the website, any areas of the website or content provided on or through the website. Customer agrees that Bounce may, in its sole discretion, at any time, terminate or limit Customer’s access to, or use of, the website or any content. Bounce may terminate or limit Customer’s access to or use of the website if Bounce determines, in its sole discretion, that Customer has infringed the copyrights of a third party. Customer agrees that Bounce shall not be liable to Customer or any third-party for any termination or limitation of access to, or use of, the website or any content, including content that Customer may have shared. Customer may terminate in accordance with Section 7.2.`,
      type: classes.normal,
    },
    {
      text: '7.3 Effect of Termination.',
      type: classes.underLine,
    },
    {
      text: `Sections 1,2 5.2, 7,8, 9, 10.2, 11, 12, 13, 14, and 15 of this Agreement will survive any expiration or termination of this Agreement.`,
      type: classes.normal,
    },
    {
      text: '8. Fees & Payment',
      type: classes.normal,
    },
    {
      text: `8.1 Purchasing Nodes.`,
      type: classes.underLine,
    },
    {
      text: 'Customer or Customer’s Authorized Users may purchase any number of Nodes to be developed, launched, and managed via the Platform. Fees for Nodes can either be on a per month or per week subscription basis.',
      type: classes.normal,
    },
    {
      text: `8.2 Recurring Payments.`,
      type: classes.underLine,
    },
    {
      text: 'Unless otherwise provided in an Order, at the time of Customer’s first purchase on the Platform Customer will be required to provide valid payment information. Unless otherwise provided in an Order, by purchasing a subscription to a Node, Customer acknowledges and agree that each Node has an initial and recurring payment charge at the then-current per Node per month (or per week) Fee, and Customer agrees that Bounce, or its third-party payment processor, may submit monthly charges to Customer’s chosen payment method without further authorization from Customer, unless and until Customer provide written notice (via email or through the Platform) to Bounce that Customer wishes to cancel its subscription or change its payment method.',
      type: classes.normal,
    },
    {
      text: `8.3 Payment Method.`,
      type: classes.underLine,
    },
    {
      text: 'Customer agrees to keep a valid payment card or cryptocurrency wallet on file with Bounce. If Customer’s payment card expires or its cryptocurrency wallet is depleted, Customer must notify Bounce immediately.',
      type: classes.normal,
    },
    {
      text: '8.4 Fees.',
      type: classes.underLine,
    },
    {
      text: 'All Fees are either in cryptocurrency or U.S. dollars and exclusive of all sales, use, and other applicable taxes, all of which shall be for Customer’s account. Bounce shall automatically charge Customer any such taxes and indicate such taxes as a separate line item in Customer’s monthly or weekly payment receipt. Unless expressly provided in this Agreement, all Fees are non-refundable.',
      type: classes.normal,
    },
    {
      text: '8.5 Suspension for violation. ',
      type: classes.underLine,
    },
    {
      text: 'In addition to Bounce’s other rights and remedies under this Agreement and at law, Bounce may suspend Customer’s access to the Platform if we are unable to process any payment due to an expired or invalid payment card or a depleted cryptocurrency wallet. Bounce will use commercially reasonable efforts to notify Customer and provide Customer an opportunity to provide updated payment information prior to suspending access.',
      type: classes.normal,
    },
    {
      text: '9. Third Party Interactions',
      type: classes.normal,
    },
    {
      text: 'The Platform and Website may contain links to third-party websites. These links are provided solely as a convenience to Customer and should not be interpreted by us as an endorsement of the content on the individual third-party websites. Any third-party products and services and any terms associated therewith are between Customer and the relevant third parties. Bounce does not support, license, control, endorse or otherwise make any representations or warranties regarding any third-party products or services under this section, and in no event will Bounce have any liability whatsoever in connection therewith.',
      type: classes.normal,
    },
    {
      text: '10. Warranties and Disclaimer',
      type: classes.normal,
    },
    {
      text: '10.1 Disclaimer.',
      type: classes.underLine,
    },
    {
      text: 'Except where expressly provided otherwise, The Website, Platform, their components, any documentation and all content provided on or through the Website, are provided on an “as is” and “as available” basis. Bounce expressly disclaims all warranties of any kind, whether express or implied including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose and non-infringement with respect to the Website and all content provided on or through the Website.',
      type: classes.normal,
    },
    {
      text: '10.2 Representations and Warranties.',
      type: classes.underLine,
    },
    {
      text: 'Bounce makes no warranty that: (1) The Website or content will meet Customer’s requirements; (2) The Website will be available on an uninterrupted, timely, secure, or error-free basis; (3) The results that may be obtained from the use of the Website or any content provided on or through the Website will be accurate or reliable; or (4) the quality of any content purchased or obtained by Customer on or though the Website will meet Customer’s expectations. Additionally, Customer represents and warrants to Bounce that (a) Customer has obtained and shall obtain all necessary rights and consents to provide Bounce with the Customer Data including, with respect to any personal information contained therein, the express consent from any applicable individuals to disclose and transfer such information to Bounce for the purposes contemplated herein, and (b) that the Customer Data and the Nodes do not and shall not infringe, misappropriate, or otherwise violate the rights of any third party including, without limitation, intellectual property rights.',
      type: classes.normal,
    },
    {
      text: '10.3 Exclusions and Limitations.',
      type: classes.underLine,
    },
    {
      text: 'Some jurisdictions do not allow the disclaimer or exclusion of certain warranties or the disclaimer, exclusion or limitation of certain liabilities. To the extent that they are held to be legally invalid, disclaimers, exclusions, and limitations set forth in these terms of use, including those set forth in section 8 and 10, do not apply and all other terms shall remain in full force and effect.',
      type: classes.normal,
    },
    {
      text: '11. Indemnification',
      type: classes.normal,
    },
    {
      text: 'Customer agrees to indemnify and hold harmless Bounce, its officers, directors, employees and agents from and against any and all claims, liabilities, damages, losses or expenses, which include settlements costs and reasonable attorneys’ fees due to or arising out of a third party claim regarding or in connection with (i) Customer’s use or an Authorized Users’ use of the Services or breach of these Terms; (ii) Customer’s Nodes; or (iii) Customer or any of Customer’s Authorized Users’ gross negligence or willful misconduct, to the extent that such liabilities, damages and costs were caused by Customer or its Authorized Users.',
      type: classes.normal,
    },
    {
      text: '12. Limitation of Liability',
      type: classes.normal,
    },
    {
      text: `NOTWITHSTANDING ANYTHING TO THE CONTRARY IN THIS AGREEMENT, BUT ONLY TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW Bounce, ITS LICENSORS AND AGENTS SHALL NOT IN ANY EVENT BE LIABLE FOR ANY SPECIAL, INCIDENTAL, INDIRECT OR CONSEQUENTIAL DAMAGES OF ANY KIND, OR FOR DAMAGES MEASURED BY LOST PROFITS, OR FOR DAMAGES FOR LOST OPPORTUNITY, LOSS OF GOODWILL, LOSS OF USE, LOSS OF DATA OR OTHER INTANGIBLE OR SPECULATIVE LOSSES, EVEN IF Bounce HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES, RESULTING FROM THE USE OR INABILITY TO USE THE SERVICES OR THE WEBSITE; THE COST OF SUBSTITUTE GOODS OR SERVICES; ANY PRODUCTS, DATA, INFORMATION OR SERVICES PURCHASED OR OBTAINED OR MESSAGES RECEIVED OR TRANSACTIONS ENTERED INTO, THOUGH OR FORM THE SERVICES; UNAUTHORIZED ACCESS TO OR ALTERATION OF CUSTOMER’S TRANSMISSION OR DATA, STATEMENTS OR CONDUCT OF ANYONE RELATED TO THEE SERVICES; THE PERFORMANCE OF NON-PERFORMANCE OF ANY THIRD PARTY ACCOUNT PROVIDER SITE, EVEN IF THE PROVIDER HAS BEEN PREVIOUSLY ADVISED OF THE POSSIBILITY OF SUCH DAMAGES; OR ANY PROVIDER OR THIRD PARTY WEBSITE, OR ANY OTHER MATTER RELATING TO THE SERVICES OR THE WEBSITE.
      The limitation of liability set above does not apply to liability resulting from our gross negligence or willful misconduct or death or bodily injury caused by products Customer purchases through the Website. The foregoing does not affect any liability which cannot be excluded or limited under applicable law.`,
      type: classes.normal,
    },
    {
      text: '13. Confidentiality',
      type: classes.normal,
    },
    {
      text: '13.1 Purpose. ',
      type: classes.underLine,
    },
    {
      text: 'Recipient must not use any of Discloser’s Confidential Information for any purpose other than carrying out Recipient’s obligations or exercising its rights under this Agreement.',
      type: classes.normal,
    },
    {
      text: '13.2 Permitted Disclosures and Obligations.',
      type: classes.underLine,
    },
    {
      text: 'Recipient also must not disclose to any third party any Confidential Information, other than to Recipient’s Affiliates, contractors and consultants who (a) need to know such information in order to fulfill the Purpose, and (b) are bound by confidentiality obligations substantially similar to Recipient’s under this Agreement (each Party is fully responsible for its respective Affiliates’, contractors’ and consultants’ compliance with this Agreement). Recipient must treat all Discloser Confidential Information with the same degree of care Recipient gives to its own Confidential Information, but not less than reasonable care. Further, neither Party may disclose publicly the existence or nature of any negotiations, discussions or consultations in progress between the Parties without the prior written consent of the other Party. Recipient and its Affiliates, contractors and consultants who receive Confidential Information hereunder must: (i) not use any such Confidential Information to compete with Discloser or in any other way except as reasonably necessary for the Purpose; (ii) not reverse engineer, disassemble or decompile any prototypes, software or other tangible objects received from Discloser under this Agreement that embody Confidential Information; (iii) promptly notify Discloser of any unauthorized use or disclosure of its Confidential Information of which Recipient becomes aware; and (iv) reasonably assist Discloser in remedying any such unauthorized use or disclosure.',
      type: classes.normal,
    },
    {
      text: '14. General',
      type: classes.normal,
    },
    {
      text: '14.1 Governing Law and Venue.',
      type: classes.underLine,
    },
    {
      text: 'This Agreement and any Services provided hereunder will be governed exclusively by the laws applicable in the State of California, excluding its provisions on conflicts or choice of law. Subject to the arbitration provision below, Customer irrevocably and unconditionally consent to submit to the exclusive jurisdiction and venue of the state courts in San Francisco County, California or federal court for the Northern District of California with respect to any dispute or litigation arising under this Agreement or as the result of any services.',
      type: classes.normal,
    },
    {
      text: '14.2 Binding Arbitration.',
      type: classes.underLine,
    },
    {
      text: 'Any dispute, claim or controversy arising out of or relating to the services, this agreement or the breach, termination, enforcement, interpretation or validity thereof, including the determination of the scope or applicability of this agreement to arbitrate, shall be determined by binding arbitration rather than a court in San Francisco, California before a sole arbitrator. The arbitration shall be administered by JAMS pursuant to streamlined arbitration rules and procedures, and the arbitrator shall apply the laws applicable in the state of California. Judgment on the award may be entered in any court having jurisdiction as specified above under “governing law and venue.” This clause shall not preclude parties from seeking injunctions or other forms of equitable relief or provisional remedies in aid of arbitration from a court of appropriate jurisdiction. Customer agrees that all disputes must be brought in Customer’s individual capacity and not as a Plaintiff or class member in any purported class or representative proceeding. By entering into this agreement and agreeing to arbitration, Customer agrees that it is waiving the right to file a lawsuit and the right to a trial by jury. In addition, Customer agrees to waive the right to participate in a class action or litigation on a class-wide basis. Customer agrees that it has expressly and knowingly waived these rights. In any arbitration, the arbitrator may, in the award, allocate all or part of the costs of the arbitration including the fees of the arbitrator and the reasonable attorneys’ fees of the prevailing party, and shall determine the prevailing party for this purpose.',
      type: classes.normal,
    },
    {
      text: '14.3 Limitation on Time to File Claims.',
      type: classes.underLine,
    },
    {
      text: 'Any cause of action or claim Customer may have arising out of or relating to these Terms of Use or the Website must be commenced within one (1) year after the cause of action accrues; otherwise, such cause of action or claim is permanently barred.',
      type: classes.normal,
    },
    {
      text: '14.4 Waiver and Severability.',
      type: classes.underLine,
    },
    {
      text: 'The failure of Bounce to exercise or enforce any rights or provisions in these Terms of Use shall not constitute a waiver of such right or provision. If any part or provision of these Terms of Use is found to be unenforceable, such part or provision may be modified to make the Terms of Use as modified legal and enforceable. The balance of the Terms of Use shall not be affected.',
      type: classes.normal,
    },
    {
      text: '14.5 Force Majeure.',
      type: classes.underLine,
    },
    {
      text: 'If either Party is prevented from performing, or is unable to perform, any of its obligations under this Agreement (other than payment obligations) due to any cause beyond its reasonable control, e.g. war, riots, labor unrest, fire, earthquake, flood, hurricane, other natural disasters and acts of God, internet service failures or delays, and denial of service attacks (collectively, “Force Majeure”), the affected Party’s performance will be excused for the resulting period of delay or inability to perform.',
      type: classes.normal,
    },
    {
      text: '14.6 Persons Not the Age of Majority.',
      type: classes.underLine,
    },
    {
      text: 'Persons who are not the age of majority are not eligible to use the Website, and we ask that no information in relation to such persons be submitted to us.',
      type: classes.normal,
    },
    {
      text: '14.7 Geographic Restrictions.',
      type: classes.underLine,
    },
    {
      text: 'The owner of this Website is based in the State of California in the United States. We make no claims that the Website or any of its content is accessible or appropriate outside of the United States. Access to the Website may not be legal by certain persons or in certain countries. If Customer accesses the Website from outside the United States, Customer does so on its own initiative and is responsible for compliance with local laws.',
      type: classes.normal,
    },
    {
      text: 'Sale service on Bounce is only open to non-U.S. persons and entities. All registrants must meet eligibility requirements to participate.',
      type: classes.normal,
    },
    {
      text: 'Sale service on Bounce is not and will not be offered or sold, directly or indirectly, to any person who is a resident, organized, or located in any country or territory subject to OFAC comprehensive sanctions programs from time to time, including Cuba, Crimea region of Ukrain, Democratic people’s Republic of Korea, Iran, Syria, any person found on the OFAC specially designated nationals, blocked persons list, any other consolidated prohibited persons list as determined by any applicable governmental authority.',
      type: classes.normal,
    },
    {
      text: '14.8 Assignment.',
      type: classes.underLine,
    },
    {
      text: 'Customer may not assign, delegate or transfer these terms or Customer’s rights or obligations hereunder, or Customer’s Services account, in any way (by operation of law or otherwise) without the express prior written consent of Bounce. Bounce may transfer, assign, or delegate these terms and our rights and obligations without consent.',
      type: classes.normal,
    },
    {
      text: '14.9 Marketing.',
      type: classes.underLine,
    },
    {
      text: 'During the term, Bounce is permitted to identify Customer or Authorized User as an Bounce Customer or Authorized User on Bounce’s website and marketing materials. In connection therewith, we may use Customer’s corporate name, trade name, trademarks, and corporate logos. Subject to the doctrine of fair use, all use will be done in goodwill and will inure solely to Customer’s benefit.',
      type: classes.normal,
    },
    {
      text: '14.10 Anti-Corruption.',
      type: classes.underLine,
    },
    {
      text: 'Customer acknowledges it has not received or been offered any illegal or otherwise improper bribe, kickback, payment, gift or other thing of value by an Bounce employee, representative or agent in connection with this Agreement. Customer will use reasonable efforts to promptly notify Bounce if Customer becomes aware of any circumstances that are contrary to this acknowledgement.',
      type: classes.normal,
    },
    {
      text: '14.11 Independent Contractors. ',
      type: classes.underLine,
    },
    {
      text: 'The parties are independent contracting parties. Neither Party has, or will hold itself out as having, any right or authority to incur any obligations on behalf of the other Party. The Parties’ relationship in connection with this Agreement will not be construed as a joint venture, partnership, franchise, employment, or agency relationship, or as imposing any liability upon either Party that otherwise might result from such a relationship.',
      type: classes.normal,
    },
    {
      text: '14.12 Notices.',
      type: classes.underLine,
    },
    {
      text: 'All legal notices (e.g., notice of termination of this Agreement or an order form based on a material breach) required under this Agreement must be delivered to the other Party in writing (a) in person, (b) by nationally recognized overnight delivery service, or (c) by certified U.S. mail (requiring signature) to the other Party’s corporate headquarters, Attention: Legal Department. With respect to all other notices, Customer may email Bounce at info@Bounce.com, and Bounce may email Customer’s billing contact identified on the applicable order form(s). Either Party may change its notice address by giving written notice to the other Party.',
      type: classes.normal,
    },
    {
      text: '14.13 Entire Agreement. ',
      type: classes.underLine,
    },
    {
      text: 'This Agreement, together with all orders (if any) that Customer has executed with Bounce, comprises the entire agreement between Customer and Bounce regarding the subject matter of this Agreement, supersedes all prior or contemporaneous negotiations, discussions or agreements, whether written or oral, between the Parties regarding such subject matter, and may only be modified by a document signed by authorized representatives of both Parties.',
      type: classes.normal,
    },
    {
      text: '15. Defined Terms',
      type: classes.normal,
    },
    {
      text: 'As used in this agreement:',
      type: classes.normal,
    },
    {
      type: 'mixText',
      content: [
        {
          text: `“Authorized User(s)”`,
          type: classes.blod,
        },
        {
          text: `means Customer’s customers, employees, representatives, consultants, contractors and agents who have been authorized by Customer to use the service;`,
          type: classes.normal,
        },
      ],
    },
    {
      type: 'mixText',
      content: [
        {
          text: `“Confidential Information”`,
          type: classes.blod,
        },
        {
          text: `means information and materials provided by the disclosing Party (“Disclosure'') to the Party receiving such information or materials (“Recipient”) that (i) are identified as confidential at the time of disclosure, or (ii) a reasonable person in the relevant industries should understand to be confidential based on the nature of the information and materials and all other relevant factors. For the avoidance of doubt, Customer’s Confidential Information includes the Nodes, the Customer Materials and any non-public information or material regarding Customer, Customer’s legal or business affairs, financing, employees, or data. Bounce’s Confidential Information includes the Platform, the Website, the Aggregate Data, the Usage Data, and any and all source code relating thereto and any other non-public information or material regarding our legal or business affairs, financing, customers, properties, pricing, products, services, or data;`,
          type: classes.normal,
        },
      ],
    },
    {
      type: 'mixText',
      content: [
        {
          text: `“Customer Data”`,
          type: classes.blod,
        },
        {
          text: `means any data, information or material received by the Service from Customer or Customer’s users in the course of accessing or using the Service.`,
          type: classes.normal,
        },
      ],
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
