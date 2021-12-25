// import { storageService } from './async-storage.service'
// import { storage } from './storage.service'
// import { utilService } from './util.service'
import { httpService } from './http.service'


// const NODE_KEY = 'nodesDB';
// const STAY_URL = 'http://localhost:3000/api/stay/'

export const nodeService = {
    query,
    getById,
    remove,
    save,
    getEmptyNode
}

// _createData()


async function query(pageIdx) {
    // return storageService.query(NODE_KEY)

    return httpService.get(`node/${pageIdx}`)

}

async function getById(id) {
    // return storageService.get(NODE_KEY, id)
    const node = httpService.get(`node/id/${id}`)
    return node
}

async function remove(id) {
    // return storageService.remove(NODE_KEY, id)
    return httpService.delete(`node/${id}`)
}


async function save(node) {
    // const savedNode = (node._id) ? storageService.put(NODE_KEY, node) : storageService.post(NODE_KEY, node)
    // return savedNode;

    if (node._id) {
        const addedNode = await httpService.put(`node/${node._id}`, node)
        return addedNode

    } else {
        const addedNode = await httpService.post(`node`, node)
        return addedNode
    }

}

function getEmptyNode() {
    return {
        ip: '',
        port: '',
        isBitnodes: false

    }
}



// function _createData() {
//     var nodes = storage.load(NODE_KEY)
//     if (!nodes || !nodes.length) {
//         nodes = [{
//                 _id: utilService.makeId(),
//                 ip: '37.59.47.27',
//                 port: '8333',
//                 isBitnodes: true
//             },
//             {
//                 _id: utilService.makeId(),
//                 ip: '185.25.48.184',
//                 port: '8333',
//                 isBitnodes: true
//             },
//             {
//                 _id: utilService.makeId(),
//                 ip: '35.211.2.103',
//                 port: '8333',
//                 isBitnodes: true
//             },
//             {
//                 _id: utilService.makeId(),
//                 ip: '148.251.131.164',
//                 port: '8333',
//                 isBitnodes: true
//             },
//             {
//                 _id: utilService.makeId(),
//                 ip: '176.9.154.216',
//                 port: '8333',
//                 isBitnodes: true
//             },
//         ]

//         storage.store(NODE_KEY, nodes)
//     }
//     return nodes;
// }