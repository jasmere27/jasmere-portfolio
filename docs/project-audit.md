# Portfolio project audit

Inspected the sibling project folders in `Documents` on 14 November 2026 against the existing project and shop data. Existing homepage: 17 cards plus featured VeriFact. Initially added 22 distinct projects or collections. Two personal apps were subsequently removed at the owner’s request. The homepage now contains 38 projects including VeriFact.

Descriptions and stacks come from each project's README, package manifests, implementation notes, or source pages. Public demo screenshots use fresh browser contexts without signing in. Private business records, personal calendar data, credentials, backups and signing files are excluded.

| Added project | Local source | Availability shown |
| --- | --- | --- |
| T Fam Ice | `../TFamInventory/README.md` | Business workspace; sign-in required |
| CODELE | `../Codele/README.md` | Verified public app |
| CodeForge: Developer Quest | `../CodeForge/codeforge/README.md` | Local app in development |
| GMC Scholars Hub | `../GMC/gmc-dashboard/PROJECT-NOTES.md` | Private workspace; no public link or screenshot |
| BellyVel | `../BellyVelv1/bellyvel-commitment/README.md` | Isolated reviewer demo; simulated money |
| BellyVel Lite | `../BellyVelv1/bellyvel-lite/README.md` | Separate prototype; simulated money |
| SideHunt AI | `../AIJobFinder/README.md` | Verified public app |
| Axiom — AI Trading Research | `../AITrader/README.md`, `docs/DEPLOYMENT.md` | Frontend preview; backend still required |
| ClipForge AI | `../AIClipper/README.md` | Local MVP in development |
| Jea Labs AI Affiliate | `../AIAffiliate/README.md` | Local app in development |
| Digital Kids Books | `../DigitalKidsBooks/README.md` | Local collection |
| Jea Labs Digital Kits | `../raketPH/jea-labs-digital-kits/HANDOFF.md` | Local release candidate; compatibility checks pending |
| Codekin | `../CodeKin/README.md` | Public simulated web demo; local desktop coding |
| BellyVel Growth Studio | `../BellyVelGrowthStudio/README.md` | Internal tool in development |
| Jea Labs Content Studio | `../ContentCreator/app/`, `package.json` | Local app in development |
| Pet Portrait Studio | `../JiraManager/README.md` | Local studio requiring Jira access |
| Church Slide Maker | `../PPTMaker/README.md` | No verified public demo URL found in source docs |
| LAST ONLINE | `../AIVideoMaker/README.md` | Local animation draft; character voices pending |
| Jea AI Labs Website | `../Jas Labs/site/index.html` | No verified public demo URL found in source docs |
| Assessment of Learning E-Portfolio | `../beEPortfolio/site/` | No verified public demo URL found in source docs |

## Existing projects and duplicates

- The original BellyVel folder and archived APK versions are represented by the current BellyVel project. BellyVel Lite is a separate prototype with its own source and deployment.
- UniHub is Sellora, SoundTrip is Melo, LeadFinder is Jea Labs Scout, and All-in-One-Inbox is Jea Labs Connect; these were already represented.
- AI Workmate PH was already represented. The AI Coding Agent Starter Kit and From AI Beginner to App Builder were already listed on the shop page.
- Database backups, signing keys, reference images, interview materials and resume files are not separate projects.
- Existing shop listings and prices are retained. Newly discovered projects have not been invented as purchasable products.

## Thumbnails and exclusions

Two personal apps are excluded from the published homepage and shop project collection at the owner’s request. Their screenshot asset is removed from the portfolio source.

Every one of the 38 published projects now has a thumbnail with descriptive alt text. Existing polished thumbnails are retained. Sixteen formerly text-only cards use framed actual app screenshots, product previews or original finished artwork, saved as optimized 1280 × 720 WebP assets.

New thumbnail source locations:

- T Fam Ice: `../TFamInventory/test-results/compact-home-1024.png`.
- GMC Scholars Hub: `../GMC/gmc-dashboard/outputs/clean-dashboard-desktop.png`; aggregate dashboard only, no individual scholar records.
- AI Affiliate: `../AIAffiliate/frontend/test-results/dashboard-desktop.png`.
- Digital Kids Books: `../DigitalKidsBooks/previews/catalog-desktop.png`.
- Digital Kits: `../raketPH/jea-labs-digital-kits/01-online-seller-kit/marketing/02-dashboard.png`.
- Pet Portrait Studio: `../JiraManager/finished product.jpg`.
- LAST ONLINE: `../AIVideoMaker/output/last-online-animation-cover.png`.
- CodeForge, Church Slide Maker, Jea AI Labs and the education portfolio: browser captures of their existing local builds. Church Slide Maker uses the included sample sermon and local generation.
- BellyVel Lite and Codekin: fresh public demo screenshots. Codekin was allowed to finish loading and its tutorial was dismissed.
- Growth Studio: actual frontend with an empty, browser-mocked viewer workspace; no production data or invented business metrics.
- Content Studio: actual app running against a fresh temporary local database, with no connected accounts or production data.

CODELE, BellyVel, SideHunt AI and Axiom retain their verified public screenshots. Demo availability checks verify page availability rather than every remote app workflow.

Validation: production Astro build and whitespace checks passed. Browser checks at 370px and 1440px verified 37 image cards plus featured VeriFact, unique names, all image downloads and alt text, private labels, both themes, mobile menu and shop filters. Both excluded apps are absent from the built homepage and shop.


## GitHub update — 19 November 2026

Added three builds created after the previous audit, bringing the homepage to **41 projects** including featured VeriFact. Preserved the existing personal-app exclusions and shop prices. Added a repository README with the complete portfolio index.

| Added project | Local source | Availability shown |
| --- | --- | --- |
| Interview Copilot | `../InterviewCopilot/README.md`, `web/package.json` | Public browser app; configured AI provider required; desktop edition also available locally |
| SignBridge AI | `../SignBridgeAI/README.md` | Public development web app; camera preview and manual notes; no trained ASL classifier or sign translation |
| PARALLEL | `../Parallel/README.md`, `docs/NETLIFY.md` | Public Android APK download page; native app, physical-device verification pending |

All three linked pages returned HTTP 200 in fresh browser contexts. Their new 1280 × 720 WebP thumbnails are captures of the actual public pages without accounts, credentials, recordings or personal notes. The PARALLEL image depicts its download page rather than a simulated native app screen.

The GitHub commit includes the existing project expansion, project screenshots and portfolio presentation changes. Resume files, interview materials and unrelated local documents are left untracked.

Validation for this update: `npm run build` and staged whitespace checks passed. Production-preview browser checks at 370px and 1440px verified 40 unique project cards plus featured VeriFact, all image downloads and alt text, no horizontal overflow or browser errors, both themes, the mobile menu and every shop filter. All 41 thumbnail imports decode successfully.
