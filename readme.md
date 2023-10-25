# Star Employee Ballot

20 kişilik bir şirket çalışanları grubundan, ayın yıldız çalışanını seçmek üzere geliştirilmiş bir oylama uygulamasıdır. Uygulama içerisinde istediğiniz kişiye sınırsız oy verebilir, kişilerin bilgilerini görüntüleyebilir ve yapılan oylama ve profil görüntüleme olaylarını takip edebilirsiniz.

Uygulamanın geliştirme süreci yaklaşık olarak bir buçuk gün aldı. Bu sürenin büyük bir kısmını, özellikle tasarım aşamasına ayırdım. Minimalist, kullanıcı dostu ve canlı bir uygulama olsun istedim. Tasarımı hayal ederken ve hayata geçirirken, Superpeer'in renk paleti ve tasarım anlayışından esinlendim.

### Live: http://case-01.selkii.net

<img src="https://raw.githubusercontent.com/kadirselki/case-01/master/public/images/web2.gif" height="516">
<img src="https://raw.githubusercontent.com/kadirselki/case-01/master/public/images/mobile.gif" width="250">

### Localde çalıştırmak için aşağıdaki adımları takip edin:

1 - `git clone https://github.com/kadirselki/case-01.git`

2 - `.env` dosyasını oluşturun ve içerisine aşağıdaki değişkenkeri ekleyin

    PORT = 3009
    GRAPHQL_SERVER = "http://localhost:9002/graphql"

2 - `npm install`

3 - `docker-compose up --build` (iki uygulamayı da dockerda başlatır.)

Bu işlemler sonrasında uygulama http://localhost:3000 adresinde çalışmaya başlayacaktır. Api ise http://localhost:9002 adresinde çalışmaya başlayacaktır.

#### Ayrı bir şekilde uygulamaları ayağa kaldırmak için;

3 - `docker-compose up graphql-faker` (GraphQL-faker) - http://localhost:9002

4 - GraphQL ayağa kalktıktan sonra `npm run dev` (react app) - http://localhost:3009

## Kullanılan teknolojiler

-   Vite
-   React
    -   React Router
    -   Redux Toolkit
-   Typescript
-   Scss
-   Apollo
-   GraphQL
-   Docker

## Geliştirici notları

### Design

SCSS'de 6-1 pattern (abstracts, base, components, layout, pages, vendors) kullandım. Tasarım aşamasında, hayal gücümle oluşturduğum stilleri CSS'e dökerek oluşturdum. Bu süreçte tasarım üzerinde sık sık değişiklikler yapmam gerektiği için, tipografi ve design pattern oluşturmak pek mümkün olmadı. Uygulamayı tamamladıktan sonra bunu yapmak da bir anlam ifade etmezdi.

### Development

Uygulamanın kod kalitesini ve sürdürülebilirliğini artırmak amacıyla Typescript, Eslint ve Prettier gibi araçlardan faydalandım. Mimariyi mümkün olduğunca bileşen tabanlı (component-based) tutarak, uygulama içindeki bağımlılıkları minimize etmeyi amaçladım. Ayrıca, GraphQL-faker'deki @fake ile oluşturulan görsel verilerin yanlış ve hatalı URL'ler içermesi nedeniyle, kullanıcı görsellerini "api-scheme.sdl" dosyası içerisine kendim ekledim.

### State Management

Redux-toolkit kullanarak üç farklı slice geliştirdim:

-   App: Uygulamanın genel yüklenme ve hata durumlarını yönetiyorum. Ayrıca, toplam oy sayısını da burada takip ediyorum.
-   Employees: Uygulama başladığında, Apollo aracılığıyla API'den çektiğim çalışan bilgilerini bu slice'ta saklıyorum ve gerektiğinde burada güncellemeler yapıyorum.
-   Logs: Kullanıcıların profil görüntülemeleri ve oy kullanmaları gibi eylemlerini bu slice üzerinden izliyor ve kaydediyorum.

### Deployment

GraphQL-faker ve react uygulamamı dockerize edip, Digital Ocean'da bir droplete yükledim. Dns ve nginx ayarlarını yapıp, Docker ile ayağa kaldırdım.

### Notes

GraphQL-faker kullanımı nedeniyle uygulamamızda kararlı bir veri seti bulunmamaktadır. Bu, tarayıcıda sayfa yenilendiğinde veri kaybına ve önceki verilerin tekrar yüklenmemesine yol açar. Bu sorunu çözmek için yerel depolama (localStorage) kullanmayı düşünmedim, çünkü bu, API kullanımının temel amacını sarsardı. Mevcut API yalnızca veri alma (GET) işlemleri için kullanılıyor. Herhangi bir veri değişikliği kaydedilmiyor.
