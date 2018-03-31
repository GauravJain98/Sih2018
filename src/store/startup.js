
export class MenObj {
    mentor = [{
        "id": "1",
        "name": "Mr.Akshat Gupta",
        "photo": "",
        "skills": [
            "web", "amdroid", "python", "ruby"
        ],
        "startups": [
            "skill India", "abc", "xyz"
        ],
        "description": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
        "experience": "5yrs",
        "education": [
            "Mtech", "Btech"
        ]
    }, {
        "id": "2",
        "name": "Mr.Rajat Gupta2",
        "photo": "",
        "skills": [
            "web", "python", "ruby"
        ],
        "startups": [
            "skilled", "abc", "xyz"
        ],
        "description": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
        "experience": "5yrs",
        "education": [
            "Mtech", "Btech"
        ]
    }, {
        "id": "1",
        "name": "Mr.Akshat Sharma",
        "photo": "",
        "skills": [
            "web", "amdroid", "python", "ruby"
        ],
        "startups": [
            "skill India", "abc", "xyz"
        ],
        "description": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
        "experience": "5yrs",
        "education": [
            "Mtech", "Btech"
        ]
    }, {
        "id": "2",
        "name": "Mr.Rajat Gupta2",
        "photo": "",
        "skills": [
            "web", "python", "ruby"
        ],
        "startups": [
            "skilled", "abc", "xyz"
        ],
        "description": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
        "experience": "5yrs",
        "education": [
            "Mtech", "Btech"
        ]
    }]
    getMentor = () => { return this.mentor }
    addMentor = (newMen) => {
        this.mentor = [...this.mentor,
            newMen
        ]
    }
    createNewObj = (obj, id = undefined, name = undefined, photo = undefined, skills = undefined, startups = undefined, description = undefined, experience = undefined, education = undefined) => {
        return {
            ...obj,
            'id': id,
            'name': name,
            'photo': photo,
            'skills': skills,
            'startups': startups,
            'description': description,
            'education': education,
            'experience': experience
        }
    }
    updateMentorInfo = (obj, newObject) => {
        let oldObjectIndex = this.mentor.indexOf(obj);
        this.mentor = [...this.mentor.slice(0, oldObjectIndex), newObject, ...this.mentor.slice(oldObjectIndex + 1)]
    }
};
// var startup = [{
//     "id": "1",
//     "name": "Mr.Akshat Gupta",
//     "photo": "",
//     "skills": [
//         "web", "amdroid", "python", "ruby"
//     ],
//     "startups": [
//         "skill India", "abc", "xyz"
//     ],
//     "description": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
//     "experience": "5yrs",
//     "education": [
//         "Mtech", "Btech"
//     ]
// }, {
//     "id": "2",
//     "name": "Mr.Akshat Gupta2",
//     "photo": "",
//     "skills": [
//         "web", "amdroid", "python", "ruby"
//     ],
//     "startups": [
//         "skill India", "abc", "xyz"
//     ],
//     "description": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
//     "experience": "5yrs",
//     "education": [
//         "Mtech", "Btech"
//     ]
// }, {
//     "id": "1",
//     "name": "Mr.Akshat Gupta",
//     "photo": "",
//     "skills": [
//         "web", "amdroid", "python", "ruby"
//     ],
//     "startups": [
//         "skill India", "abc", "xyz"
//     ],
//     "description": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
//     "experience": "5yrs",
//     "education": [
//         "Mtech", "Btech"
//     ]
// }]

