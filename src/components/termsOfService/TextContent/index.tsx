import { Typography, Box } from '@material-ui/core';
import React from 'react';
import { WithAnimation } from 'src/modules/WithAnimation';
import { useTextContentStyles } from './useTextContentStyles';
const TextContent: React.FC = () => {
  const classes = useTextContentStyles();
  const textData = [
    {
      text: 'Bounce Terms of Use',
      type: classes.title,
    },
    {
      text: 'Effective date: April 1st, 2023',
      type: classes.abstract,
    },
    {
      text: `This Bounce Terms of Use (“Agreement”) governs your access to and use of the website https://www.Bounce.finance/ (the "Website"). The Website is provided and owned by Bounce DAO Ltd.  In this Agreement, we refer to Bounce Inc., its parents, affiliates, and subsidiaries, collectively, as “Bounce,” “Company,” “We,” “Our,” or “Us.” `,
      type: classes.normal,
    },
    {
      type: 'mixText',
      content: [
        {
          text: `When you access or use the Website and/or the Platform (as defined below) (including by creating of an account with us), you (“Customer”/“You”/“Your”) agree to follow and be bound by the following terms, which include our Privacy Policy (`,
          type: classes.normal,
        },
        {
          text: `available here`,
          type: classes.openLink,
          link: '/privacyPolicy'
        },
        {
          text: `). Bounce may revise and update these Terms of Use from time to time in its sole discretion. All changes are effective immediately when posted to the Website and apply to all access to and use of the Website thereafter. You should review these Terms periodically for updates.`,
          type: classes.normal,
        },
      ],
    },
    {
      text: `Please read the following Agreement carefully, as it affects your legal rights and obligations and includes binding dispute resolution, class waiver, and governing law provisions.  If you do not agree with any of the terms below, please do not use the Website.`,
      type: classes.blod,
    },
    {
      text: ``,
      type: classes.normal,
    },
    {
      text: `1. Description of Platform`,
      type: classes.blod,
    },
    {
      text: `The Website provides access to a blockchain-based platform that powers an ecosystem of auctions for real-world-collectibles and other assets(the “Platform”). The Platform allows users to build, design, connect, collect, trade, and access third-party auctions related to all kinds of valuables,  collectibles, art and other assets across multiple blockchains.`,
      type: classes.normal,
    },
    {
      text: 'Multi wallet support',
      type: classes.underLine,
    },
    {
      text: `The Platform is compatible with the most commonly used cryptocurrency wallets, such as MetaMask, Binance Chain wallet, WalletConnect, Coinbase Wallet, Ledger and Trezor. More wallets may be supported in the future.`,
      type: classes.normal,
    },
    {
      text: 'Multi chain support',
      type: classes.underLine,
    },
    {
      text: `The Platform is available for Ethereum and Binance Smart Chain-based art. Once connected to a wallet, users can toggle between the Ethereum and Binance Smart Chain mainnet networks.`,
      type: classes.normal,
    },
    {
      text: `2. Ownership`,
      type: classes.blod,
    },
    {
      text: `The technology and content used to offer, or provided in connection with, the Platform and/or the Website, including the software, text, displays, images, video, and audio, and the design, selection and arrangement thereof, are exclusively owned by Bounce Inc., its licensors or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret and other intellectual property or proprietary rights laws.`,
      type: classes.normal,
    },
    {
      text: `3. Grant of Rights`,
      type: classes.blod,
    },
    {
      text: `Subject to the terms and conditions of this Agreement, Bounce hereby grants to Customer the non-exclusive, non-transferable, worldwide, royalty-free right to access and use the Website.`,
      type: classes.normal,
    },
    {
      text: `4. Customer Accounts and Use Restrictions`,
      type: classes.blod,
    },
    {
      text: `4.1 Customer Account`,
      type: classes.underLine,
    },
    {
      text: `You may be required to create an account (“Account”) in order to access certain areas on the Website. When you create an Account, you agree to provide us with current, complete and accurate registration information, and you agree to be responsible for updating and maintaining the truth and accuracy of the information provided. You are responsible for any activity that takes place under your Account, so please maintain the confidentiality of the username and password you create.`,
      type: classes.normal,
    },
    {
      text: `We are not liable for any loss that you may incur as a result of someone else using your Account, either with or without your knowledge. You agree to immediately notify us of any unauthorized use or any other breach of security relating to your Account.`,
      type: classes.normal,
    },
    {
      text: `Customer is responsible for all activity occurring under Customer’s accounts, and for complying with all laws and regulations applicable to Customer’s use of the Website and/or the Platform. Customer also must (a) notify Bounce promptly upon becoming aware of any unauthorized use of any Customer password or account (or any other breach of security), and (b) notify Bounce promptly upon becoming aware of, and make a reasonable effort to stop, any unauthorized copying, distribution or misuse of any aspect of the Website and/or the Platform.`,
      type: classes.normal,
    },
    {
      text: `We reserve the right to terminate your Account if, in our sole discretion, we have determined that you have violated this Agreement.`,
      type: classes.normal,
    },
    {
      text: `4.2 Use Restrictions`,
      type: classes.underLine,
    },
    {
      text: `You may not, without Bounce’s prior written consent, cause or permit the: (a) use, copying, modification, rental, lease, sublicense, transfer, or other commercial`,
      type: classes.normal,
    },
    {
      text: `exploitation of, or other third party access to, any element of the Website and/or the Platform, except to the extent expressly permitted by this Agreement; (b) creation of any modifications or derivative works of the Website and/or the Platform; (c) reverse engineering of the Website and/or the Platform; (d) gaining of unauthorized access to the Website and/or the Platform or its related systems or networks; (e) interference with or disruption of the integrity or performance of the Website and/or the Platform or the data contained therein; (f) unlawful or criminal use of Website and/or the Platform or any other conduct that would give rise to civil or criminal liability; (g) collection of information about other users of the Website and/or the Platform for any purpose; (h) impersonation of any person or entity or other misrepresentation of who you are, your age, or your affiliation with any person or entity.`,
      type: classes.normal,
    },
    {
      text: `You may not register for an account on behalf of or as an individual other than yourself or your entity.`,
      type: classes.normal,
    },
    {
      text: `4.3 Eligibility`,
      type: classes.underLine,
    },
    {
      text: `Persons under the age of majority in their place of residence are not eligible to use the Website and/or the Platform.`,
      type: classes.blod,
    },
    {
      text: `Residents of the United States and/or the People’s Republic of China (“PRC”) are not eligible to use the Website and/or the Platform.`,
      type: classes.blod,
    },
    {
      text: `The Website and the Platform are not and will not be offered, directly or indirectly, to any person who is a resident, organized, or located in any country or territory subject to any comprehensive sanctions program(s), including that set forth by the U.S. Office of Foreign Asset Control (“OFAC”), from time to time, including:`,
      type: classes.normal,
    },
    {
      text: `Cuba`,
      type: classes.li,
    },
    {
      text: `Crimea region of Ukraine`,
      type: classes.li,
    },
    {
      text: `Democratic people’s Republic of Korea`,
      type: classes.li,
    },
    {
      text: `Iran`,
      type: classes.li,
    },
    {
      text: `Syria`,
      type: classes.li,
    },
    {
      text: `Any person found on the OFAC specially designated nationals, blocked persons list, any other consolidated prohibited persons list as determined by any applicable governmental authority.`,
      type: classes.li,
    },
    {
      text: `We employ technical measures to prevent non-eligible persons from accessing the Website and/or the Platform.  By using the Website and/or the Platform, you confirm that you do not reside in and are not located in the U.S., PRC, or in any country or territory subject to the OFAC comprehensive sanctions program.`,
      type: classes.normal,
    },
    {
      text: ``,
      type: classes.normal,
    },
    {
      text: `5. Term/Termination`,
      type: classes.blod,
    },
    {
      text: `5.1 Term of Agreement`,
      type: classes.underLine,
    },
    {
      text: `Bounce may, in its sole discretion, at any time discontinue providing or limit access to the Website, any areas of the Website or content provided on or through the Website (e.g., the Platform). Customer agrees that Bounce may, in its sole discretion, at any time, terminate or limit Customer’s access to, or use of, the Website or any content thereupon. Bounce may terminate or limit Customer’s access to or use of the Website if Bounce determines, in its sole discretion, that Customer has infringed the copyrights of a third party. Customer agrees that Bounce shall not be liable to Customer or any third-party for any termination or limitation of access to, or use of, the Website or any content thereupon, including content that Customer may have shared.`,
      type: classes.normal,
    },
    {
      text: `Customer may terminate immediately by deleting any Account or by providing at least 14 days written notice to contact@bounce.community.`,
      type: classes.normal,
    },
    {
      text: `6. Third Party Sites and Services (Including Real-World Asset and NFT Auctions Facilitated By the Website for which Additional Terms May Apply)`,
      type: classes.blod,
    },
    {
      text: `The Website may contain links to third-party websites. These links are provided solely as a convenience to Customer and should not be interpreted as an endorsement of the content on the individual third-party websites.`,
      type: classes.normal,
    },
    {
      type: 'mixText',
      content: [
        {
          text: `From time to time, Bounce may collaborate with third parties to facilitate third parties’ offering of certain non-fungible digital assets (“NFTs”) and associated so-called “real-world assets” and similar third-party transactions. `,
          type: classes.normal,
        },
        {
          text: `The Website only provides access to a blockchain-based protocol (i.e., the Platform) that facilitates such interactions. By using the Website, you acknowledge that Bounce is not responsible for the redemption of NFTs for any real-world assets, the storage, safety, or shipping of such real-world assets, or related payments. Bounce makes no representations as to the quality, condition, authenticity or value of any NFTs or associated real-world assets.`,
          type: classes.blod,
        },
      ],
    },
    {
      text: `Any third-party products and services and any terms associated therewith are between Customer and the relevant third parties. Bounce does not support, license, control, endorse or otherwise make any representations or warranties regarding any third-party products or services, and in no event will Bounce have any liability whatsoever in connection therewith.`,
      type: classes.normal,
    },
    {
      text: `7. Warranties and Disclaimer`,
      type: classes.blod,
    },
    {
      text: `This Agreement may be supplemented by additional terms, privacy statements or notices that explain how we or our partners may collect and process information (including Personal Information) in specific circumstances (“Additional Terms”). For example, if you participate in a specific service offered by a third-party partner, like the redemption of an NFT for a real-world asset, Additional Terms may be disclosed to you when you use that service that govern your use of that service.`,
      type: classes.normal,
    },
    {
      text: `8. Warranties and Disclaimer`,
      type: classes.blod,
    },
    {
      text: `8.1 Disclaimer`,
      type: classes.underLine,
    },
    {
      text: `Your use of, and reliance on, the Website and any information obtained therein is at your own risk. Except where expressly provided otherwise, the Website, its components, and any documentation and/or content provided on or through the Website, are provided on an “as is” and “as available” basis. Bounce expressly disclaims all warranties of any kind, whether express or implied including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose and non-infringement with respect to the Website and all content provided on or through the Website.`,
      type: classes.normal,
    },
    {
      text: `8.2 Representations and Warranties`,
      type: classes.underLine,
    },
    {
      text: `Bounce makes no warranty that: (1) The Website and/or the Platform or its contents will meet Customer’s requirements; (2) The Website and/or the Platform or its contents will be available on an uninterrupted, timely, secure, or error-free basis; (3) The results that may be obtained from the use of the Website and/or the Platform or any content provided on or through the Website and/or the Platform will be accurate or reliable; or (4) the quality of any content obtained by Customer on or though the Website and/or the Platform will meet Customer’s expectations.`,
      type: classes.normal,
    },
    {
      text: `Customer represents and warrants to Bounce that (a) Customer has obtained and shall obtain all necessary rights and consents to provide Bounce with any data (including any personal information or personal data contained therein), the legally appropriate consent of any applicable individuals to disclose and transfer such information to Bounce for the purposes contemplated herein, and (b) that the data do not and shall not infringe, misappropriate, or otherwise violate the rights of any third party including, without limitation, intellectual property rights.`,
      type: classes.normal,
    },
    {
      text: `9. Indemnification`,
      type: classes.blod,
    },
    {
      text: `Customer agrees to indemnify and hold harmless Bounce, its officers, directors, employees and agents from and against any and all claims, liabilities, damages, losses or expenses, which include settlements costs and reasonable attorneys’ fees due to or arising out of a third party claim regarding or in connection with (i) Customer’s use of the Website and/or the Platform and/or any breach of these Terms; and/or (ii) Customer’s gross negligence or willful misconduct, to the extent that such liabilities, damages and costs were caused by Customer.`,
      type: classes.normal,
    },
    {
      text: `10. Limitation of Liability`,
      type: classes.blod,
    },
    {
      text: `NOTWITHSTANDING ANYTHING TO THE CONTRARY IN THIS AGREEMENT, BUT ONLY TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW BOUNCE, ITS LICENSORS AND AGENTS SHALL NOT IN ANY EVENT BE LIABLE FOR ANY SPECIAL, INCIDENTAL, INDIRECT OR CONSEQUENTIAL DAMAGES OF ANY KIND, OR FOR DAMAGES MEASURED BY LOST PROFITS, OR FOR DAMAGES FOR LOST OPPORTUNITY, LOSS OF GOODWILL, LOSS OF USE, LOSS OF DATA OR OTHER INTANGIBLE OR SPECULATIVE LOSSES, EVEN IF BOUNCE HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES, RESULTING FROM THE USE OR INABILITY TO USE THE WEBSITE AND/OR THE PLATFORM; THE COST OF SUBSTITUTE DATA OR INFORMATION OBTAINED OR MESSAGES RECEIVED OR TRANSACTIONS ENTERED INTO, THOUGH OR FROM THE WEBSITE AND/OR THE PLATFORM; UNAUTHORIZED ACCESS TO OR ALTERATION OF CUSTOMER’S TRANSMISSION OR DATA, STATEMENTS OR CONDUCT OF ANYONE RELATED TO THE WEBSITE AND/OR THE PLATFORM; THE PERFORMANCE OF NON-PERFORMANCE OF ANY THIRD PARTY ACCOUNT PROVIDER SITE, EVEN IF THE PROVIDER HAS BEEN PREVIOUSLY ADVISED OF THE POSSIBILITY OF SUCH DAMAGES; OR ANY PROVIDER OR THIRD PARTY WEBSITE, OR ANY OTHER MATTER RELATING TO THE WEBSITE AND/OR THE PLATFORM. The limitation of liability set above does not apply to liability resulting from our gross negligence or willful misconduct. The foregoing does not affect any liability which cannot be excluded or limited under applicable law. In no event shall our total liability to you for all damages, losses, and causes of action exceed fifty U.S. dollars (US $50).`,
      type: classes.normal,
    },
    {
      text: `11. General Provisions`,
      type: classes.blod,
    },
    {
      text: `11.1 Governing Law and Venue`,
      type: classes.underLine,
    },
    {
      text: `This Agreement will be governed exclusively by the laws applicable in the British Virgin Islands, excluding its provisions on conflicts or choice of law. Subject to the arbitration provision below, Customer irrevocably and unconditionally consent to submit to the exclusive jurisdiction and venue in the British Virgin Islands with respect to any dispute or litigation arising under this Agreement.`,
      type: classes.normal,
    },
    {
      text: `11.2 Binding Arbitration in the British Virgin Islands and Class Waiver`,
      type: classes.underLine,
    },
    {
      text: `Any dispute, claim or controversy arising out of or relating to this Agreement or the breach, termination, enforcement, interpretation or validity thereof, including the determination of the scope or applicability of this Agreement to arbitrate, shall be determined by binding arbitration in Road Town, Tortola, British Virgin Islands by a sole arbitrator appointed by the BVI International Arbitration Centre (“BVI IAC”) under the BVI IAC Arbitration Rules.`,
      type: classes.normal,
    },
    {
      text: `Judgment on the award may be entered in any court having jurisdiction as specified above under “Governing Law and Venue.” This clause shall not preclude either party from seeking injunctions or other forms of equitable relief for the purpose of enforcing this arbitration provision. `,
      type: classes.normal,
    },
    {
      type: 'mixText',
      content: [
        {
          text: `Customer agrees that all disputes must be brought in Customer’s individual capacity and not as a Plaintiff or class member in any purported class or representative proceeding.`,
          type: classes.normal,
        },
        {
          text: `By entering into this Agreement and agreeing to arbitration, Customer agrees that it is waiving the right to file a lawsuit and the right to a trial by jury. In addition, Customer agrees to waive the right to participate in a class action or litigation on a class-wide basis. Customer agrees that it has expressly and knowingly waived these rights.`,
          type: classes.blod,
        },
        {
          text: `In any arbitration, the arbitrator may, in the award, allocate all or part of the costs of the arbitration including the fees of the arbitrator and the reasonable attorneys’ fees of the prevailing party, and shall determine the prevailing party for this purpose.`,
          type: classes.normal,
        },
      ],
    },
    {
      text: `11.3 Limitation on Time to File Claims`,
      type: classes.underLine,
    },
    {
      text: `Any cause of action or claim Customer may have arising out of or relating to this Agreement or the Website and/or the Platform must be commenced within one (1) year after the cause of action accrues; otherwise, such cause of action or claim is permanently barred.`,
      type: classes.normal,
    },
    {
      text: `11.4 Waiver and Severability`,
      type: classes.underLine,
    },
    {
      text: `The failure of Bounce to exercise or enforce any rights or provisions in this Agreement shall not constitute a waiver of such right or provision. If any part or provision of this Agreement is found to be unenforceable, such part or provision may be modified to make the Agreement as modified legal and enforceable. The balance of the Agreement shall not be affected.`,
      type: classes.normal,
    },
    {
      text: `11.5 Survival of Terms`,
      type: classes.underLine,
    },
    {
      text: `Sections 1, 4.2, 4.3, 5, 6, 7, 8, 9, 10, & 11 of this Agreement will survive any expiration or termination of this Agreement.`,
      type: classes.normal,
    },
    {
      text: `11.6 Force Majeure`,
      type: classes.underLine,
    },
    {
      text: `If either party is prevented from performing, or is unable to perform, any of its obligations under this Agreement (other than payment obligations) due to any cause beyond its reasonable control, e.g. war, riots, labor unrest, fire, earthquake, flood, hurricane, other natural disasters and acts of God, internet service failures or delays, and denial of service attacks (collectively, “Force Majeure”), the affected party’s performance will be excused for the resulting period of delay or inability to perform.`,
      type: classes.normal,
    },
    {
      text: `11.7 Assignment`,
      type: classes.underLine,
    },
    {
      text: `Customer may not assign, delegate or transfer these terms or Customer’s rights or obligations hereunder, or Customer’s account, in any way (by operation of law or otherwise) without the express prior written consent of Bounce. Bounce may transfer, assign, or delegate these terms and our rights and obligations without consent.`,
      type: classes.normal,
    },
    {
      text: `11.8 Marketing`,
      type: classes.underLine,
    },
    {
      text: `During the term, Bounce is permitted to identify Customer as a Bounce customer on the Website and/or Bounce’s marketing materials. In connection therewith, we may use Customer’s corporate name, trade name, trademarks, and corporate logos.`,
      type: classes.normal,
    },
    {
      text: `11.9 Anti-Corruption`,
      type: classes.underLine,
    },
    {
      text: `Customer acknowledges it has not received or been offered any illegal or otherwise improper bribe, kickback, payment, gift or other thing of value by an Bounce employee, representative or agent in connection with this Agreement. Customer will use reasonable efforts to promptly notify Bounce if Customer becomes aware of any circumstances that are contrary to this acknowledgement.`,
      type: classes.normal,
    },
    {
      text: `11.10 No Agency Relationship`,
      type: classes.underLine,
    },
    {
      text: `Customer and Bounce are independent contracting parties. Neither has, or will hold itself out as having, any right or authority to incur any obligations on behalf of the other. The parties’ relationship in connection with this Agreement will not be construed as a joint venture, partnership, franchise, employment, or agency relationship, or as imposing any liability upon either party that otherwise might result from such a relationship.`,
      type: classes.normal,
    },
    {
      text: `11.11 Notices`,
      type: classes.underLine,
    },
    {
      text: `All legal notices (e.g., notice of termination of this Agreement or an order form based on a material breach) required under this Agreement must be delivered to the other party in writing (a) in person, (b) by nationally recognized overnight delivery service, or (c) by certified U.S. mail (requiring signature) to the other party’s corporate headquarters, Attention: Legal Department. With respect to all other notices, Customer may email Bounce at contact@bounce.community, and Bounce may email Customer using any contact information provided in connection with Customer’s Account or wallet. Either party may change its notice address by giving written notice to the other party.`,
      type: classes.normal,
    },
    {
      text: `11.12 Entire Agreement`,
      type: classes.underLine,
    },
    {
      text: `This Agreement comprises the entire agreement between Customer and Bounce regarding the subject matter of this Agreement, supersedes all prior or contemporaneous negotiations, discussions or agreements, whether written or oral, regarding such subject matter, and may only be modified by a document signed by authorized representatives of both parties.`,
      type: classes.normal,
    },
    // {
    //   text: 'Welcome to Bounce, a platform that powers an ecosystem of products for auctions. Build, design, connect, collect and trade all kinds of assets, tokens and NFTs across multiple blockchains.',
    //   type: classes.subTitle,
    // },
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
                      return <span className={item.type} onClick={() => {
                        item?.link && window.open(item?.link, '_blank')
                      }}>{item.text}</span>;
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
