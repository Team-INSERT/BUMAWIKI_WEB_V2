import React from "react";
import * as S from "./HomeLayout.style";
import {
  AccodianMenu,
  Aside,
  Board,
  Classify,
  ScrollBtn,
  SubFooter,
} from "@/components";

const HomeLayout = () => {
  return (
    <S.HomeWrap>
      <Board>
        <S.HomeTitleWrap>
          <S.HomeTitleText>부마위키:대문</S.HomeTitleText>
        </S.HomeTitleWrap>
        <S.NoticeWrap>
          <S.NoticeText href="/docs/부마위키%20업데이트%20내역" target="_blank">
            공지사항
          </S.NoticeText>
          <S.NoticeText href="/docs/부마위키%20방명록" target="_blank">
            방명록
          </S.NoticeText>
          <S.NoticeText
            href="/docs/부마위키%20개인정보처리방침"
            target="_blank"
          >
            개인정보처리방침
          </S.NoticeText>
          <S.NoticeText
            href="https://forms.gle/DzAP7XSYH4ubK43FA"
            target="_blank"
          >
            문의하기
          </S.NoticeText>
        </S.NoticeWrap>
        <S.HomeClassify>
          <Classify>부마위키</Classify>
        </S.HomeClassify>
        <S.HomeLine />
        <S.HomeDescriptionWrap>
          <S.HomeDescriptionText>
            여러분이 가꾸어 나가는 <span>역사의 고서</span>
          </S.HomeDescriptionText>
          <S.HomeDescriptionSubText>
            <span>부마위키</span>에 오신 것을 환영합니다!
          </S.HomeDescriptionSubText>
          <S.HomeDescriptionContents>
            <span>부마위키</span>는 부산소마고 학생이라면 누구나 기여할 수 있는
            위키입니다.
            <br />
            검증되지 않았거나 편향된 내용이 있을 수 있습니다.
            <br />
            <a
              href="https://forms.gle/DzAP7XSYH4ubK43FA"
              target="_blank"
              rel="noreferrer"
            >
              이슈 제보하기
            </a>
          </S.HomeDescriptionContents>
        </S.HomeDescriptionWrap>
        <S.HomeLine />
        <S.TitleBoxWrap>
          <S.TitleBoxMainWrap>
            <S.TitleBoxMainTitle>
              부산소프트웨어마이스터고등학교
            </S.TitleBoxMainTitle>
            <S.TitleBoxMainEngTitle>
              Busan Software Meister High School
            </S.TitleBoxMainEngTitle>
          </S.TitleBoxMainWrap>
          <S.SchoolImage src={"/images/school-night.jpeg"} alt="부산소마고" />
          <S.TableWrap>
            <S.TableName>
              <S.TableText>교훈</S.TableText>
            </S.TableName>
            <S.TableContent>
              <S.TableText>創意(창의), 誠實(성실)</S.TableText>
            </S.TableContent>
          </S.TableWrap>
          <S.TableWrap>
            <S.TableName>
              <S.TableText>개교</S.TableText>
            </S.TableName>
            <S.TableContent>
              <S.TableText>1970년 3월 26일 가락종합고등학교</S.TableText>
            </S.TableContent>
          </S.TableWrap>
          <S.TableWrap>
            <S.TableName>
              <S.TableText>유형</S.TableText>
            </S.TableName>
            <S.TableContent>
              <S.TableText>마이스터고등학교</S.TableText>
            </S.TableContent>
          </S.TableWrap>
          <S.TableWrap>
            <S.TableName>
              <S.TableText>성별</S.TableText>
            </S.TableName>
            <S.TableContent>
              <S.TableText>남녀공학</S.TableText>
            </S.TableContent>
          </S.TableWrap>
          <S.TableWrap>
            <S.TableName>
              <S.TableText>형태</S.TableText>
            </S.TableName>
            <S.TableContent>
              <S.TableText>공립학교</S.TableText>
            </S.TableContent>
          </S.TableWrap>
          <S.TableWrap>
            <S.TableName>
              <S.TableText>교목</S.TableText>
            </S.TableName>
            <S.TableContent>
              <S.TableText>
                소나무 - 장수(長壽), 꿋꿋한 절개와 의지를 보이다.
              </S.TableText>
            </S.TableContent>
          </S.TableWrap>
          <S.TableWrap>
            <S.TableName>
              <S.TableText>교화</S.TableText>
            </S.TableName>
            <S.TableContent>
              <S.TableText>목련 - 우애있고 사랑스러우며 고귀하다.</S.TableText>
            </S.TableContent>
          </S.TableWrap>
          <S.TableWrap>
            <S.TableName>
              <S.TableText>교조</S.TableText>
            </S.TableName>
            <S.TableContent>
              <S.TableText>
                솔개 - 유연하고 민첩하며 늠름한 기상으로 높이 날아 세계를 보다.
              </S.TableText>
            </S.TableContent>
          </S.TableWrap>
          <S.TableWrap>
            <S.TableName>
              <S.TableText>교장</S.TableText>
            </S.TableName>
            <S.TableContent>
              <S.TableText>윤혜정 교장선생님</S.TableText>
            </S.TableContent>
          </S.TableWrap>
          <S.TableWrap>
            <S.TableName>
              <S.TableText>학생 수</S.TableText>
            </S.TableName>
            <S.TableContent>
              <S.TableText>125명 (2022.05)</S.TableText>
            </S.TableContent>
          </S.TableWrap>
          <S.TableWrap>
            <S.TableName>
              <S.TableText>교직원 수</S.TableText>
            </S.TableName>
            <S.TableContent>
              <S.TableText>33명 (2022.05)</S.TableText>
            </S.TableContent>
          </S.TableWrap>
          <S.TableWrap>
            <S.TableName>
              <S.TableText>관할 교육청</S.TableText>
            </S.TableName>
            <S.TableContent>
              <S.TableText>부산광역시교육청</S.TableText>
            </S.TableContent>
          </S.TableWrap>
          <S.TableWrap>
            <S.TableName>
              <S.TableText>주소</S.TableText>
            </S.TableName>
            <S.TableContent>
              <S.TableText>
                부산광역시 강서구 가락대로 1393 (가락동)
              </S.TableText>
            </S.TableContent>
          </S.TableWrap>
          <S.TableWrap>
            <S.TableName>
              <S.TableText>홈페이지</S.TableText>
            </S.TableName>
            <S.TableContent>
              <S.TableLink
                href="https://school.busanedu.net/bssm-h/main.do"
                target={"_blank"}
                rel={"noreferrer"}
              >
                https://bssm.hs.kr
              </S.TableLink>
            </S.TableContent>
          </S.TableWrap>
        </S.TitleBoxWrap>
        <S.SummaryWrap>
          <AccodianMenu name={"개요"}>
            <S.SummaryContent>
              <span>
                환영합니다! 창의와 성실로 꿈을 펼치는
                부산소프트웨어마이스터고등학교입니다.
                <br />
                부산소프트웨어마이스터고등학교 학생이라면 누구나 문서를 편집하고
                작성할 수 있습니다.
                <br />
                <br />
                사실에 근거하고 남을 비방하거나 칭찬하지 않는 선에서 자유롭게
                문서를 편집할 수 있습니다.
                <br />
                문의 및 문서삭제는{" "}
                <span style={{ color: "blue", fontWeight: 400 }}>
                  bumawiki@gmail.com
                </span>
                으로 요청하실 수 있습니다.
                <br />
                <br />
                <span style={{ fontWeight: 800 }}>
                  교내의 모든 유/무선 네트워크 정보는 국가정보원
                  『국가·공공기관의 무선망 구축 보안 가이드라인, 국가정보보안
                  기본지침』 과,
                  <br />
                  교육부 『정보보안기본지침』에 따라 대외비로 관리되고 있으니
                  절대로 기재해서는 안 됩니다.
                </span>
              </span>
            </S.SummaryContent>
            <S.SummaryVideoWrap>
              <S.SummaryVideo
                width="560"
                height="315"
                src="https://www.youtube.com/embed/DIvVZouIVpQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                allowFullScreen
              />
            </S.SummaryVideoWrap>
          </AccodianMenu>
        </S.SummaryWrap>
        <S.DepartmentWrap>
          <AccodianMenu name={"학과"}>
            <S.DepartmentContent>
              1학년때에는 공통이며, 2학년 때 소프트웨어개발과 32명,
              임베디드소프트웨어과 32명으로 나뉘게 된다.
            </S.DepartmentContent>
            <S.DepartmentTitle>소프트웨어개발과</S.DepartmentTitle>
            <S.DepartmentContent>
              SW구조에 대한 이해를 바탕으로 다양한 SW개발 도구 및 설계 방법을
              학습함으로써 SW분석, 설계, 구현, 시험, 유지 보수 등의
              <br /> 업무를 능동적으로 수행할 수 있는 진보적이고 창의적인 SW
              개발자를 양성한다.
            </S.DepartmentContent>
            <S.DepartmentTitle>임베디드소프트웨어과</S.DepartmentTitle>
            <S.DepartmentContent>
              전자기기 및 산업용 기기의 HW와 SW에 대한 이해를 바탕으로 제조업
              하드웨어를 제어하는 펌웨어 개발, 시험, 유지 보수를
              <br /> 능동적으로 수행할 수 있는 시스템 SW엔지니어 및 응용
              SW엔지니어를 양성한다.
            </S.DepartmentContent>
          </AccodianMenu>
        </S.DepartmentWrap>
        <S.SongWrap>
          <AccodianMenu name={"교가"}>
            <S.SongContent>
              옛 가야 푸른 정기 서려도는 낙동강 구비
              <br />
              새 천년 조국 빛낼 배움터 솟았네
              <br />
              저마다 가슴가슴 큰 희망 품어 안고
              <br />
              창의와 성실로 진리를 탐구하는
              <br />
              우리는 모두 하나 힘 모아 전진하세
              <br />
              영원무궁 길이 빛날 부산소프트웨어마이스터고
            </S.SongContent>
          </AccodianMenu>
        </S.SongWrap>
        <S.HistoryWrap>
          <AccodianMenu name={"학교 연혁"}>
            <S.HistoryContent>
              <S.TitleBoxWrap>
                <S.TableHistoryWrap>
                  <S.TableHistoryName>
                    <S.TableText>날짜</S.TableText>
                  </S.TableHistoryName>
                  <S.TableHistory>
                    <S.TableText>연혁</S.TableText>
                  </S.TableHistory>
                </S.TableHistoryWrap>
                <S.TableWrap>
                  <S.TableName>
                    <S.TableText>2021.03.01</S.TableText>
                  </S.TableName>
                  <S.TableContent>
                    <S.TableText>
                      부산소프트웨어마이스터고등학교 개교
                    </S.TableText>
                  </S.TableContent>
                </S.TableWrap>
                <S.TableWrap>
                  <S.TableName>
                    <S.TableText>2021.03.01</S.TableText>
                  </S.TableName>
                  <S.TableContent>
                    <S.TableText>제22대 윤혜정 교장 취임</S.TableText>
                  </S.TableContent>
                </S.TableWrap>
                <S.TableWrap>
                  <S.TableName>
                    <S.TableText>2020.02.11</S.TableText>
                  </S.TableName>
                  <S.TableContent>
                    <S.TableText>
                      제48회 졸업식(57명), 졸업생 총 9,800명
                    </S.TableText>
                  </S.TableContent>
                </S.TableWrap>
                <S.TableWrap>
                  <S.TableName>
                    <S.TableText>2019.09.11</S.TableText>
                  </S.TableName>
                  <S.TableContent>
                    <S.TableText>제21대 김은수 교장 취임</S.TableText>
                  </S.TableContent>
                </S.TableWrap>
                <S.TableWrap>
                  <S.TableName>
                    <S.TableText>2010.12.31</S.TableText>
                  </S.TableName>
                  <S.TableContent>
                    <S.TableText>
                      학교평가 최우수학교 선정(교육과학기술부장관상)
                    </S.TableText>
                  </S.TableContent>
                </S.TableWrap>
                <S.TableWrap>
                  <S.TableName>
                    <S.TableText>2010.04.14</S.TableText>
                  </S.TableName>
                  <S.TableContent>
                    <S.TableText>
                      부산광역시교육청 우수특성화고로 선정
                    </S.TableText>
                  </S.TableContent>
                </S.TableWrap>
                <S.TableWrap>
                  <S.TableName>
                    <S.TableText>2006.12.20</S.TableText>
                  </S.TableName>
                  <S.TableContent>
                    <S.TableText>전국 100대 교육과정 우수학교 선정</S.TableText>
                  </S.TableContent>
                </S.TableWrap>
                <S.TableWrap>
                  <S.TableName>
                    <S.TableText>2005.12.20</S.TableText>
                  </S.TableName>
                  <S.TableContent>
                    <S.TableText>학교현장 평가 최우수학교 선정</S.TableText>
                  </S.TableContent>
                </S.TableWrap>
                <S.TableWrap>
                  <S.TableName>
                    <S.TableText>2002.12.20</S.TableText>
                  </S.TableName>
                  <S.TableContent>
                    <S.TableText>
                      실험실습 최우수 학교로 교육감상 수상
                    </S.TableText>
                  </S.TableContent>
                </S.TableWrap>
                <S.TableWrap>
                  <S.TableName>
                    <S.TableText>2000.03.07</S.TableText>
                  </S.TableName>
                  <S.TableContent>
                    <S.TableText>부산산업과학고등학교 개교</S.TableText>
                  </S.TableContent>
                </S.TableWrap>
                <S.TableWrap>
                  <S.TableName>
                    <S.TableText>1992.03.01</S.TableText>
                  </S.TableName>
                  <S.TableContent>
                    <S.TableText>
                      부산서여자상업고등학교로 교명 변경
                    </S.TableText>
                  </S.TableContent>
                </S.TableWrap>
                <S.TableWrap>
                  <S.TableName>
                    <S.TableText>1977.03.01</S.TableText>
                  </S.TableName>
                  <S.TableContent>
                    <S.TableText>김해여자상업고등학교로 교명 변경</S.TableText>
                  </S.TableContent>
                </S.TableWrap>
                <S.TableWrap>
                  <S.TableName>
                    <S.TableText>1974.03.01</S.TableText>
                  </S.TableName>
                  <S.TableContent>
                    <S.TableText>김해상업고등학교로 교명 변경</S.TableText>
                  </S.TableContent>
                </S.TableWrap>
                <S.TableWrap>
                  <S.TableName>
                    <S.TableText>1970.03.26</S.TableText>
                  </S.TableName>
                  <S.TableContent>
                    <S.TableText>가락종합고등학교 개교</S.TableText>
                  </S.TableContent>
                </S.TableWrap>
              </S.TitleBoxWrap>
            </S.HistoryContent>
          </AccodianMenu>
        </S.HistoryWrap>
        <S.BusWrap>
          <AccodianMenu name={"운행 버스"}>
            <S.BusContent>
              세 노선 다 배차간격이 길어 이용하기 어려운 편이다. 심지어 김해
              4번과 강서2번, 강서15-1번은 일 8회만 운행한다.
              <br />
              그래서 기숙사 입소, 퇴소 날에는 학교에서 셔틀버스를 운행한다.
            </S.BusContent>
            <S.BusDescription>
              <S.TitleBoxWrap>
                <S.TableWrap
                  style={{ marginTop: "-4px", borderTop: "2px solid #ccc" }}
                >
                  <S.TableContent>
                    <S.TableText>
                      부산산업과학고교 / 부산소프트웨어마이스터고교
                    </S.TableText>
                  </S.TableContent>
                  <S.TableName>
                    <S.TableText>4, 강서 7-2</S.TableText>
                  </S.TableName>
                </S.TableWrap>
                <S.TableWrap>
                  <S.TableContent>
                    <S.TableText>부산산업과학고등학교</S.TableText>
                  </S.TableContent>
                  <S.TableName>
                    <S.TableText>강서 2</S.TableText>
                  </S.TableName>
                </S.TableWrap>
                <S.TableWrap
                  style={{ marginTop: "-4px", marginBottom: "80px" }}
                >
                  <S.TableContent>
                    <S.TableText>덕포마을</S.TableText>
                  </S.TableContent>
                  <S.TableName>
                    <S.TableText>강서 15-1</S.TableText>
                  </S.TableName>
                </S.TableWrap>
              </S.TitleBoxWrap>
            </S.BusDescription>
          </AccodianMenu>
        </S.BusWrap>
        <SubFooter />
      </Board>
      <ScrollBtn />
      <Aside />
    </S.HomeWrap>
  );
};

export default HomeLayout;
