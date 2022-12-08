import Head from 'next/head';
import Image from "next/image";
// import { logoSidebar } from '../helpers/getimages';
import logoSidebar from '../public/imgs/logo-login.svg';

const AdminLayout = ({ children }) => {

    return (
        <div className="min-h-screen flex flex-col">
            <Head>
                <title>Presence</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <div className="flex flex-row justify-between max-h-screen min-w-full items-start lg:overflow-hidden">

                <div className="fixed top-0 left-0 z-10 w-[60px] h-screen lg:relative min-h-screen basis-sidebar_mobile lg:basis-[30%] xl:basis-[30%] 2xl:basis-3/12 bg-green_mid2 grid lg:p-10 lg:pr-0 2xl:p-12 2xl:pr-0">
                    <nav className="w-full h-full bg-green_mid flex shadow-2xl relative">
                        <div className="relative w-full h-full flex flex-col border justify-between items-start z-10">
                            <div><Image src={logoSidebar} width='100' height='200' className="w-40" alt="Logo Presence - Comunicação e Sustentabilidade"/></div>
                            <ul><li>menu</li></ul>
                        </div>
                        <div className="absolute inset-0 w-[60px] border-l-4 bg-green_dark border-orange z-0"></div>
                    </nav>  
                </div>


                <div className="min-h-screen ml-[60px] lg:ml-0 basis-content_mobile lg:basis-[70%] xl:basis-[70%] 2xl:basis-9/12 bg-green_lightest grid lg:p-10 lg:pl-0 2xl:p-12 2xl:pl-0 ">
                    <div className="w-full bg-white shadow-2xl lg:max-h-content_xl 2xl:max-h-content_2xl lg:overflow-y-scroll p-10">
                        {children}
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint accusamus nesciunt est perspiciatis incidunt odit vel accusantium illum autem id doloremque impedit eaque tempore sit minima, voluptas dignissimos temporibus qui, voluptatum nisi illo, soluta quidem non. Voluptate aspernatur cupiditate debitis dolores quis soluta ab sit adipisci ex assumenda temporibus laudantium quod in sunt optio nemo molestias accusantium est, sapiente voluptatum placeat velit dignissimos ipsa? Amet impedit beatae sint voluptatum enim odio molestiae sit atque perferendis itaque. Sit quidem itaque nisi deleniti porro, exercitationem ducimus excepturi, nobis accusamus cupiditate in? Voluptas enim porro voluptate minima, fugiat eaque quas laudantium quod nesciunt quibusdam blanditiis consequuntur molestiae omnis inventore at consectetur id ipsam facilis corrupti officiis qui aspernatur magni impedit harum. Quibusdam dolor vero molestiae, saepe laborum sed debitis ullam quam. Autem voluptatum, architecto magni velit aspernatur asperiores sint consectetur libero numquam, dolorum facere cum odio. Impedit assumenda doloremque aliquid repudiandae, obcaecati ea laudantium eius est mollitia dolor debitis, cumque facilis ipsa accusantium exercitationem a iste sint voluptatibus architecto fugit, similique tempora aperiam eligendi culpa. Dicta quasi, possimus harum impedit repellat suscipit dolor numquam ab, minima accusamus qui ducimus, nisi consectetur dignissimos mollitia? Blanditiis eligendi dolore eos, ipsa cupiditate nemo, sunt nisi vitae amet, aut voluptate nihil dolores beatae facilis? Perferendis rerum veniam, impedit molestiae sapiente enim commodi quia consequatur quae eligendi et odit dicta, beatae, nobis iste quasi ea temporibus officiis. Iste ad commodi dicta ducimus in perspiciatis reprehenderit a consequuntur! Saepe consequatur tempore dolorum, sapiente voluptatum nesciunt ad error, eveniet eum, quam officiis. Nesciunt aperiam ratione dicta officiis alias, asperiores quod enim error? Repudiandae vel quis recusandae ea minima molestias minus fuga? Velit, hic maxime cupiditate consequuntur rerum ducimus ratione expedita ullam mollitia eligendi. Temporibus repudiandae magnam, incidunt cum sit excepturi assumenda veniam animi cumque quidem aspernatur fugiat magni nihil voluptate modi enim necessitatibus nemo odit rem molestiae consequatur? Recusandae non, totam pariatur labore possimus adipisci sed vitae quo quisquam deleniti tenetur eos ab quia neque facilis, obcaecati quibusdam asperiores nam accusamus doloremque dolores repellendus. Sequi facere ducimus animi necessitatibus, optio, autem dignissimos modi similique expedita dolor architecto at velit quaerat consequatur voluptatem beatae a! Modi quo aut tempora, porro reiciendis fugit, quasi consectetur quia obcaecati voluptatem mollitia aspernatur, impedit qui quam odio ut a aperiam culpa repudiandae ad sequi? Possimus in deserunt molestiae molestias repudiandae magni quaerat dolorum expedita, doloremque totam nemo quis! Consequuntur voluptatibus eaque fugit, nobis animi cupiditate amet omnis quisquam? Veritatis, ab vitae aspernatur quas praesentium in est beatae iusto quibusdam fuga commodi consequatur adipisci possimus porro? Quisquam vitae quae sunt minima eaque saepe cum, reprehenderit mollitia praesentium cupiditate adipisci iste maiores fugiat possimus placeat delectus aspernatur velit beatae. Ipsa nihil harum odio, molestiae, accusantium ut ex illum facilis sapiente magnam itaque dolorum pariatur explicabo, ea suscipit voluptate sed doloremque accusamus! Aspernatur quis placeat suscipit ea esse corporis libero! Enim architecto sapiente maiores hic dolores ipsum, ab ad nisi possimus nemo quis facilis pariatur minus maxime recusandae assumenda illum, velit saepe? Nam nisi odio fugiat modi dolore voluptates incidunt quis doloribus blanditiis beatae, mollitia quibusdam laudantium deserunt tenetur fuga, itaque veniam ad sint? Ab pariatur mollitia sit minima aliquam. In dolores maiores facilis beatae modi cupiditate totam porro quas fugiat. Eveniet temporibus tempora asperiores nam sint cupiditate rem aliquid iure commodi nostrum laboriosam maxime et explicabo id in tenetur repellendus excepturi iusto, nulla architecto, obcaecati culpa incidunt reprehenderit! Consequatur, facere. Qui consequuntur magnam unde ratione voluptas ab, eveniet culpa quod. Omnis, nesciunt. Quod sunt deleniti impedit voluptatem obcaecati totam dolore. Laudantium voluptatem laborum mollitia rem facilis. Officia velit quo autem sit omnis, consequatur quos error eum quam perspiciatis, odio earum possimus, minus dignissimos quisquam quod! Earum aliquam blanditiis ipsam facere inventore, doloremque, nulla accusamus iste nobis quibusdam minus itaque sit dolores suscipit placeat sunt voluptatum eaque. Illum facilis, eveniet, ducimus suscipit sapiente vitae consequuntur optio laborum quam voluptates fugit itaque molestias, earum sint? Cum dicta officiis fugit fuga natus, doloribus labore rem architecto praesentium enim consequatur fugiat magni beatae vel a iste provident qui exercitationem, veritatis quo eius tenetur laudantium! Libero, qui officia impedit consectetur cum magni nulla earum neque ratione totam itaque ut enim reiciendis repellat blanditiis ad, odit eos corrupti cumque eius odio quaerat, repellendus inventore. Expedita voluptate quas nostrum magni quisquam soluta error eos assumenda, aperiam non enim autem magnam ad ipsum beatae quibusdam, odio dolor omnis consequuntur aut, ut praesentium esse quidem in. Fugiat obcaecati quas reprehenderit delectus dolore voluptatem fuga reiciendis numquam quae adipisci, eum optio dignissimos, nihil voluptatibus id itaque dicta a ipsam repellendus nesciunt. Voluptatum sed excepturi quia debitis corporis, a hic veniam sit voluptatibus, inventore ut vero, aspernatur soluta facere quas voluptas unde accusamus repellat. Magni eligendi atque sit consequuntur alias amet labore mollitia dolor exercitationem tempora, aperiam adipisci incidunt nostrum autem nam esse iusto corporis, voluptatibus odit culpa architecto ex harum soluta. Itaque quibusdam ad mollitia? Quo aperiam provident accusantium modi adipisci tenetur error omnis fugit quae molestias quas sequi, ipsam quis, animi neque praesentium eveniet! Iure numquam ratione molestiae nostrum amet assumenda natus temporibus porro facilis tempore nulla nihil dolorum, eligendi animi quam praesentium quis? Praesentium alias ab eligendi. Placeat, corporis. Ea laboriosam veritatis cumque dolorem aut atque voluptatibus, a, rerum nihil recusandae deleniti dolore ad, amet porro repellendus excepturi harum explicabo maiores officia assumenda. Fugit, deleniti inventore adipisci enim, accusantium officia ipsa et ipsam illum reprehenderit optio voluptatum perspiciatis quae, alias temporibus suscipit cumque facilis hic sint veniam natus porro. Ipsam dignissimos totam officiis nam ut, quos veritatis facilis nisi sapiente voluptas exercitationem tempora accusamus expedita mollitia optio similique id dolorem facere aperiam voluptatum? Architecto eos at eum assumenda ut tempora eligendi temporibus dolorem minima, debitis atque maxime tempore cum quaerat, consequuntur nemo? Officiis deleniti nisi nostrum repudiandae dolor ea vero possimus laborum accusantium, aperiam amet perspiciatis sapiente exercitationem esse voluptas repellat a reprehenderit ab laudantium iure consectetur. Illo perferendis quos in, cumque quis corporis vitae! Officia nam repudiandae voluptates vero facilis ducimus cum reprehenderit tempore. Cupiditate quibusdam officiis amet possimus sequi adipisci, nesciunt error repudiandae?
                        </p>
                    </div>
                </div>
            </div>

            {/* <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">

              <div class="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-blue-900 dark:bg-gray-900 h-full text-white transition-all duration-300 border-none z-10 sidebar">


                <div class="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
                  <ul class="flex flex-col py-4 space-y-1">

                    <li>
                      <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                        <span class="inline-flex justify-center items-center ml-4">
                          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                        </span>
                        <span class="ml-2 text-sm tracking-wide truncate">Dashboard</span>
                      </a>
                    </li>
                  </ul>
                  <p class="mb-14 px-5 py-3 hidden md:block text-center text-xs">Copyright @2021</p>
                </div>

              </div>

            </div> */}
        </div>
    );
}

export default AdminLayout