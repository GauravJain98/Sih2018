// import { paths } from '../components/paths';
export const gameChanger = (state = { headList: [], ind: [], start: [], mentor: [], incub: [] }, action) => {
    switch (action.type) {
        case 'ADDINDIVIDUAL':
            if (localStorage) {
                localStorage.user = 'ind';
            }
            return {
                ind: [state.ind, action.payload.value]
            }
        case 'ADDSTARTUP':
            if (localStorage) {
                localStorage.user = 'sta';
            }
            return {
                start: [...state.start, action.payload.value]
            };
        case 'ADDMENTOR':
            if (localStorage) {
                localStorage.user = 'men';
            }
            return {
                ...state, mentor: [...state.mentor, action.payload.value]
            };
        case 'ADDINCUB':
            if (localStorage) {
                localStorage.user = 'inc';
            }
            return {
                ...state, incub: [...state.incub, action.payload.value]
            };
        case 'INDI':
            return {
                headList: [{
                    title: 'Your Courses',
                    // path: paths.individualCourses
                }, {
                    title: 'All Courses',
                    // path: paths.individualAllCourses
                }]
            };
        case 'STARTUP':
            return {
                headList: [{
                    title: 'Your Courses',
                    // path: paths.startupCourses
                },
                {
                    title: 'All Courses',
                    // path: paths.startupAllCourses
                },
                {
                    title: 'Chat',
                    // path: paths.startupChat
                },
                {
                    title: 'Public',
                    // path: paths.startupPublic
                },
                {
                    title: 'Mentor',
                    // path: paths.startupMentor
                },
                {
                    title: 'Incubs',
                    // path: paths.startupIncubs
                },
                {
                    title: 'Your Team',
                    // path: paths.startupTeam
                }]
            };
        case 'MENTOR':
            return {
                headList: [{
                    title: 'Your Courses',
                    // path: paths.mentorCourses
                },
                {
                    title: 'Chat',
                    // path: paths.mentorChat
                },
                {
                    title: 'Invest',
                    // path: paths.mentorInvest
                },
                {
                    title: 'Under You',
                    // path: paths.mentorGuideOf
                },
                {
                    title: 'Your Incubs',
                    // path: paths.mentorIncubs
                }]
            };
        case 'INCUB':
            return {
                headList: [{
                    title: 'Your Courses',
                    // path: paths.incubinatorPlace
                },
                {
                    title: 'All Courses',
                    // path: paths.incubinatorAccomodation
                }]
            };
        default:
            return state;
    }
}
