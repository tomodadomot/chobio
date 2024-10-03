import styled from 'styled-components'
import chobiUrl from './chobi2.png'

const Light = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background: radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 80%), hsl(36.77deg 60.78% 90%);
  background-blend-mode: screen;
  z-index: -1;
`

const Main = styled.main`
  display: grid;
  justify-content: center;
  overflow-y: scroll;
  height: 100vh;
  scrollbar-color: hsl(36.52deg 43.4% 89.61%) hsl(35.17deg 15.47% 73.17%);
  grid-template-rows: min-content;
  grid-template-columns: 30rem;
  padding-bottom: 2rem;
  box-sizing: border-box;
  @media (max-width: 768px) {
    grid-template-columns: 90%;
    padding: 0 5%;
  }
`

const NamePlate = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  align-content: center;
  font-family: "Major Mono Display", monospace;
  font-weight: 400;
  font-style: normal;
  font-size: 1.4rem;
  color: hsl(0deg 0% 20.85%);
  height: 100vh;
  grid-template-rows: 1.6rem 1.6rem 1.6rem 16rem;
  @media (max-width: 768px) {
    width: 100%;
    font-size: 1rem;
  }
`

const Aka = styled.div`
  font-size: 0.65rem;
`

const Paragraph = styled.div`
  display: grid;
  grid-template-rows: auto;
  gap: 1.8rem;
  padding-bottom: 4rem;
`

const Portrait = styled.div`
  background-image: url(${chobiUrl});
  height: 9rem;
  width: 8.2rem;
  background-size: cover;
  background-color: rgb(245 233 214 / 31%);
  background-blend-mode: lighten;
  border: 0.1rem solid hsl(0deg 0% 38.91%);
  @media (max-width: 768px) {
    height: 7.8rem;
    width: 7rem;
  }
`

const ChapterTitle = styled.h2`
  margin: 0;
  font-size: 1.1rem;
  padding-bottom: 0.58rem;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`

const Description = styled.section`
  font-size: 0.85rem;
  white-space: pre-line;
  line-height: 1.5rem;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`

const Text = styled.p`
  margin: 0;
  line-height: 1.5rem;
`

const DivisionTitle = styled.h1`
  justify-self: center;
  font-family: "Edu AU VIC WA NT Guides", cursive;
  font-size: 1.6rem;
  font-weight: 500;
  margin: 0;
  padding-bottom: 1.2rem;
`

const Paper = styled.article`
  border: 0.1rem solid hsl(0deg 0% 38.91%);
  background-color: hsl(0deg 0% 100% / 61%);
  padding: 1.5rem 1.5rem;
  width: 100%;
  justify-self: center;
  display: grid;
  grid-template-rows: auto;
  gap: 2.3rem;
`

const ChapterTitleEn = styled.h2`
  margin: 0;
  font-size: 1.3rem;
  padding-bottom: 0.58rem;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 600;
`

const History = styled.div`
  display: grid;
  grid-template-rows: auto;
  gap: 1.8rem;
`

const JobEntry = styled.div`
  display: grid;
  grid-template-rows: auto; 
`

const Job = styled.span`
  font-weight: 500;
`

const Term = styled.span`
  font-size: 0.7rem;
  padding-left: 2.3rem;
`

export const Resume = () => {
  
  return (
    <>
      <Light />
      <Main>

        <NamePlate>
          <div>Tomoda Taichi</div>
          <Aka>a.k.a</Aka>
          <div>Taichobi</div>
          <Portrait />
        </NamePlate>

        <Paragraph>

          <div>
            <ChapterTitle>
              友田太一と申します。
            </ChapterTitle>
            <Description>
              <Text>千葉市に住んでいます。</Text>
              <Text>以前は、東京、京都、札幌にも住んでいました。</Text>
              <br/>
              <Text>野鳥が大好きで、彼らのいない生活は考えられません。</Text>
              <Text>新しいバードフィーダーを作っては、よく妻に叱られています。</Text>
              <Text>お気に入りは、イソヒヨドリです。</Text>
              <Text>どのシーンを切り取っても、彼らのすることは微笑ましいです。</Text>
              <br/>
              <Text>愛らしい妻がいます。</Text>
              <Text>彼女のあどけない行為や言葉はときどき、私に新しい視点を与えてくれます。</Text>
              <Text>彼女と出会う前と今では、まるで違う世界を生きています。</Text>
            </Description>
          </div>

          <div>
            <ChapterTitle>
              私の職歴ですか？
            </ChapterTitle>
            <Description>
              <Text><a href="https://www.jbs.co.jp/" target="_blank" rel="noopener noreferrer">JBS</a>で８年間、システムインテグレーションに携わっていました。</Text>
              <Text>顧客のヒアリングから、見積もり、要件定義、設計、開発、テスト、納品まで、一気通貫で携わっていました。</Text>
              <Text>その中でも開発の工程を持ち場にして、プロジェクトをリードしておりました。</Text>
              <Text>つまり、コードを書くことが私の専門職です。</Text>
              <Text>Dynamics CRM の拡張コードも書くことが多かったです。</Text>
              <br/>
              <Text>その後、<a href="https://www.terrasky.co.jp/" target="_blank" rel="noopener noreferrer">テラスカイ</a>で６年間、自社サービスの開発に携わりました。</Text>
              <Text>Data Spider を AWS を基盤とした Cloudサービス化し、Data Spider Cloudとして自社サービス化するプロジェクトに立ち上げから関わりました。</Text>
              <Text>主に Cloudサービスにおける管理画面などのWEBフロントエンド開発をリードしておりました。</Text>
              <Text>API Gateway、S3、Lambda、Dynamo DB、Aurora、Kinesis当、多くのAWSサービスに振れ、本番運用しました。</Text>
            </Description>
          </div>


          <div>
            <ChapterTitle>
              今ですか？
            </ChapterTitle>
            <Description>
              <Text>今は、フルタイムの主夫をしています。</Text>
              <Text>都市鳥とのふれあい、研究がライフワークです。</Text>
              <Text>野鳥の餌台と、新しいバードフィーダーの工作などの資金を自分で稼がなければいけなくなりました。</Text>
              <Text>仕事の依頼がありましたら、気軽にご連絡ください。</Text>
              <Text><a href="mailto:tomodadomot@gmail.com">tomodadomot@gmail.com</a></Text>
              <Text>なんとなしに、お話するだけでも、大歓迎ですよ。</Text>
            </Description>
          </div>

        </Paragraph>

          <DivisionTitle>Resume</DivisionTitle>

          <Paper>

            <div>
              <ChapterTitleEn>
                Synopsis
              </ChapterTitleEn>
              <Description>フロントエンドWEBの技術に最も熟練しております。
                バックエンドも含めて、一人ですべて開発、構築できますが、フロントエンドから離れれば離れるほど熟練度は下がります。
                UI、UXのことを考えているときが、一番、幸せです。
                遅筆ですが、文章を書くのが得意です。
              </Description>
            </div>

            <div>
              <ChapterTitleEn>
                Career History
              </ChapterTitleEn>
              <History>
                <JobEntry>
                  <Job>—— フルタイム主夫</Job>
                  <Term>２０２１年１２月  →  現在</Term>
                </JobEntry>
                <JobEntry>
                  <Job>—— テラスカイ /  フロントエンドWEBリード</Job>
                  <Term>２０１６年４月  →  ２０２１年１１月</Term>
                </JobEntry>
                <JobEntry>
                  <Job>—— JBS /  システムエンジニア、CRMコンサルタント</Job>
                  <Term>２００７年４月  →  ２０１６年３月</Term>
                </JobEntry>
              </History>
            </div>

            <div>
            <ChapterTitleEn>
              Education
            </ChapterTitleEn>
              <History>
                <JobEntry>
                  <Job>—— 立命館大学 文学部 哲学科 哲学専攻</Job>
                  <Term>２００４年４月  →  ２００７年３月</Term>
                </JobEntry>
              </History>             
            </div>

            <div>
            <ChapterTitleEn>
              Technical Skills
            </ChapterTitleEn>
            <Description>
            <Text>Javascript, html, css, C#</Text>
            <Text>Node.js, webpack, vite, react, styled component, Chakra UI, Headless UI, Redux, React Redux</Text>
            <Text>AWS API Gateway, CloudFront, Lambda, Aurora, S3, Kinesis, Dynamo DB</Text>
            <Text>Dynamics CRM, Salesforce</Text>
            </Description>
            </div>

          </Paper>

        


      </Main>
    </>
  )

}

export default Resume