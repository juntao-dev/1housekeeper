import React from 'react';
import styled from 'styled-components';

const BannerWrap = styled.div`
  padding: 10px;
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  text-align: center;
`;

const HouseBanner = (props) => {
    return (
        <BannerWrap>
          <div>
            <svg id="buyhousesvg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="80%" height="100%" viewBox="0 0 1137 531.16816"><title>buy_house</title><path d="M157.39819,712.97183l-1.95117-.43945c21.75586-96.751,76.43018-184.60938,153.95117-247.3916A444.114,444.114,0,0,1,1021.553,711.35172l-1.94922.44335C973.55005,509.58609,796.32935,368.3605,588.634,368.3605,383.6604,368.3605,202.29956,513.29019,157.39819,712.97183Z" transform="translate(-31.5 -184.41592)" fill="#3f3d56"/><polygon points="1051.5 482.5 1054.5 504.5 1033.5 506.5 1036.5 479.5 1051.5 482.5" fill="#a0616a"/><path d="M984,364.91592s2,27,2,28-14,70-14,70-20,38,0,37,14-36,14-36l21-58-9-41Z" transform="translate(-31.5 -184.41592)" fill="#a0616a"/><polygon points="985.5 482.5 982.5 504.5 1003.5 506.5 1000.5 479.5 985.5 482.5" fill="#a0616a"/><path d="M994,460.91592l-5,7s-3,30,0,40,9,56,9,59,1,5,0,6-4,1-2,3,2,8,2,8v5l13,74s-8,9-2,9,28,0,27-10l-2-1s-3-66-2-69,0-9,0-9-2-3,0-4,2-9,2-9l9-61s8,41,13,45,4,14,4,14l4,88s-4,10,0,12,21,9,22-1,6-97,6-101-1-6,0-9-1-3,0-3-2-3-2-5v-49s1-10,2-12-1-4,0-7-2-13-2-13l-45-12Z" transform="translate(-31.5 -184.41592)" fill="#2f2e41"/><path d="M1029,684.91592s5-5-2-5a32.54943,32.54943,0,0,0-13,3l-5,18s-20.5,16.5,2.5,14.5,19.5-.5,19.5-.5,7-2,8-4-2-31-2-31S1034,687.91592,1029,684.91592Z" transform="translate(-31.5 -184.41592)" fill="#2f2e41"/><path d="M1072,684.91592s-5-5,2-5a32.54943,32.54943,0,0,1,13,3l5,18s20.5,16.5-2.5,14.5-22.5-.5-22.5-.5-7-2-8-4,5-31,5-31S1067,687.91592,1072,684.91592Z" transform="translate(-31.5 -184.41592)" fill="#2f2e41"/><rect x="286.14105" y="177.4318" width="8.90262" height="351.65343" fill="#3f3d56"/><path d="M408.70474,406.6619c.56672,122.96444-85.94527,223.04766-85.94527,223.04766s-87.43083-99.28154-87.99756-222.246,85.94527-223.04766,85.94527-223.04766S408.138,283.69746,408.70474,406.6619Z" transform="translate(-31.5 -184.41592)" fill="#6c63ff"/><rect x="225.5" y="383.5" width="689" height="146" fill="#f2f2f2"/><polygon points="203.5 399.5 278.5 242.5 877.5 242.5 933.5 399.5 203.5 399.5" fill="#3f3d56"/><rect x="390.5" y="252.5" width="278" height="92" fill="#f2f2f2"/><polygon points="408.5 177.5 364.5 269.5 694.5 269.5 668.5 177.5 408.5 177.5" fill="#3f3d56"/><rect x="415" y="412.5" width="219.5" height="117" fill="#ccc"/><rect x="252.5" y="416.5" width="117" height="113" fill="#ccc"/><rect x="672.5" y="423.5" width="60.5" height="106" fill="#3f3d56"/><rect y="529" width="1137" height="2" fill="#3f3d56"/><rect x="179.9049" y="297.05883" width="5.87477" height="232.05349" fill="#3f3d56"/><path d="M271.49715,511.0473c.374,81.14332-56.71464,147.18749-56.71464,147.18749s-57.695-65.51515-58.06894-146.65847,56.71464-147.1875,56.71464-147.1875S271.12317,429.904,271.49715,511.0473Z" transform="translate(-31.5 -184.41592)" fill="#6c63ff"/><path d="M271.49715,511.0473c.374,81.14332-56.71464,147.18749-56.71464,147.18749s-57.695-65.51515-58.06894-146.65847,56.71464-147.1875,56.71464-147.1875S271.12317,429.904,271.49715,511.0473Z" transform="translate(-31.5 -184.41592)" opacity="0.1"/><rect x="103.53286" y="297.05883" width="5.87477" height="232.05349" fill="#3f3d56"/><path d="M195.12511,511.0473c.374,81.14332-56.71464,147.18749-56.71464,147.18749s-57.695-65.51515-58.06894-146.65847,56.71465-147.1875,56.71465-147.1875S194.75114,429.904,195.12511,511.0473Z" transform="translate(-31.5 -184.41592)" fill="#6c63ff"/><rect x="798.5" y="429.5" width="29.5" height="27.5" fill="#3f3d56"/><rect x="838" y="429.5" width="29.5" height="27.5" fill="#3f3d56"/><rect x="798.5" y="467" width="29.5" height="28.5" fill="#3f3d56"/><rect x="838" y="467" width="29.5" height="28.5" fill="#3f3d56"/><rect x="416" y="277.67391" width="23.08696" height="21.52174" fill="#3f3d56"/><rect x="446.91304" y="277.67391" width="23.08696" height="21.52174" fill="#3f3d56"/><rect x="416" y="307.02174" width="23.08696" height="22.30435" fill="#3f3d56"/><rect x="446.91304" y="307.02174" width="23.08696" height="22.30435" fill="#3f3d56"/><rect x="589" y="277.67391" width="23.08696" height="21.52174" fill="#3f3d56"/><rect x="619.91304" y="277.67391" width="23.08696" height="21.52174" fill="#3f3d56"/><rect x="589" y="307.02174" width="23.08696" height="22.30435" fill="#3f3d56"/><rect x="619.91304" y="307.02174" width="23.08696" height="22.30435" fill="#3f3d56"/><rect x="503" y="277.67391" width="23.08696" height="21.52174" fill="#3f3d56"/><rect x="533.91304" y="277.67391" width="23.08696" height="21.52174" fill="#3f3d56"/><rect x="503" y="307.02174" width="23.08696" height="22.30435" fill="#3f3d56"/><rect x="533.91304" y="307.02174" width="23.08696" height="22.30435" fill="#3f3d56"/><rect x="686" y="434.23913" width="14.53623" height="13.55072" fill="#f2f2f2"/><rect x="705.46377" y="434.23913" width="14.53623" height="13.55072" fill="#f2f2f2"/><rect x="686" y="452.71739" width="14.53623" height="14.04348" fill="#f2f2f2"/><rect x="705.46377" y="452.71739" width="14.53623" height="14.04348" fill="#f2f2f2"/><circle cx="725" cy="484" r="4" fill="#f2f2f2"/><rect x="415" y="425" width="220" height="2" fill="#f2f2f2"/><rect x="415" y="434" width="220" height="2" fill="#f2f2f2"/><rect x="415" y="443" width="220" height="2" fill="#f2f2f2"/><rect x="415" y="452" width="220" height="2" fill="#f2f2f2"/><rect x="415" y="461" width="220" height="2" fill="#f2f2f2"/><rect x="415" y="470" width="220" height="2" fill="#f2f2f2"/><rect x="415" y="479" width="220" height="2" fill="#f2f2f2"/><rect x="415" y="488" width="220" height="2" fill="#f2f2f2"/><rect x="415" y="497" width="220" height="2" fill="#f2f2f2"/><rect x="415" y="506" width="220" height="2" fill="#f2f2f2"/><rect x="415" y="515" width="220" height="2" fill="#f2f2f2"/><rect x="252.5" y="425" width="117" height="2" fill="#f2f2f2"/><rect x="252.5" y="434" width="117" height="2" fill="#f2f2f2"/><rect x="252.5" y="443" width="117" height="2" fill="#f2f2f2"/><rect x="252.5" y="452" width="117" height="2" fill="#f2f2f2"/><rect x="252.5" y="461" width="117" height="2" fill="#f2f2f2"/><rect x="252.5" y="470" width="117" height="2" fill="#f2f2f2"/><rect x="252.5" y="479" width="117" height="2" fill="#f2f2f2"/><rect x="252.5" y="488" width="117" height="2" fill="#f2f2f2"/><rect x="252.5" y="497" width="117" height="2" fill="#f2f2f2"/><rect x="252.5" y="506" width="117" height="2" fill="#f2f2f2"/><rect x="252.5" y="515" width="117" height="2" fill="#f2f2f2"/><circle cx="877" cy="242" r="81" fill="#6c63ff"/><polygon points="928 234 885 234 885 191 869 191 869 234 826 234 826 250 869 250 869 293 885 293 885 250 928 250 928 234" fill="#fff"/><circle cx="975.5" cy="75.5" r="26" fill="#a0616a"/><path d="M998,278.91592s4,20,4,23,17,12,17,12l19-24s-12-17-12-21Z" transform="translate(-31.5 -184.41592)" fill="#a0616a"/><path d="M1013,304.91592s-8.71576-2.31982-11.35788-6.15991c0,0-27.64212,27.15991-27.64212,32.15991l22,39s0,14,2,15,0,0,0,4-6,30-4,34,4,1,2,7-7,38-7,38,18-6,44,4,57-4,57-4-8-18-6-24-5-17-5-17l-5-92s7-41,2-43l-10-4L1033.976,283.98S1026,303.91592,1013,304.91592Z" transform="translate(-31.5 -184.41592)" fill="#d0cde1"/><path d="M984,323.91592l-10,7s-5,15,0,22,7,17,7,17l20-2Z" transform="translate(-31.5 -184.41592)" fill="#d0cde1"/><path d="M1058,332.91592s-5.79086,14.89077-4.58123,29.62368A15.614,15.614,0,0,0,1056,369.91592h0L985.05556,403.597S953,406.91592,961,420.91592s37-7,37-7,76-11,82-22,10-57,10-57Z" transform="translate(-31.5 -184.41592)" fill="#a0616a"/><path d="M987.14914,232.43838l-4.51-1.80556s9.43-10.38191,22.55014-9.4791l-3.69011-4.06253s9.02-3.61106,17.22007,5.868c4.31058,4.983,9.298,10.84016,12.40712,17.43823h4.82992l-2.01583,4.43863,7.05541,4.43863-7.24168-.7973a24.561,24.561,0,0,1-.685,11.49557l.19411,3.50829s-8.39412-12.98745-8.39412-14.793v4.51388s-4.51-4.06247-4.51-6.77078l-2.46,3.15972-1.23-4.96529-15.17,4.96529,2.46-4.06247-9.43,1.35416,3.69011-4.96529s-10.66,5.868-11.07009,10.83332-5.7399,11.28466-5.7399,11.28466l-2.46-4.51388S975.25913,239.20916,987.14914,232.43838Z" transform="translate(-31.5 -184.41592)" fill="#2f2e41"/><path d="M1061,291.91592h15s11,2,14,22,6,25,3,25-39-1-39-2S1061,291.91592,1061,291.91592Z" transform="translate(-31.5 -184.41592)" fill="#d0cde1"/></svg>
          </div>
          <div style={{marginTop: "20%"}}>
          <h3>Better Manage Your Household</h3><h4>Explore How We Can Help</h4>
          </div>
      </BannerWrap>
    )
}

export default HouseBanner;