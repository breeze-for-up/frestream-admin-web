import request from '@/utils/request.js'

export function listUser(query) {
	return request({
		url: 'api/add',
		method: 'get',
		params: query
	})
}