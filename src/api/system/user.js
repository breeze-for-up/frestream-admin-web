import request from '@/utils/request.js'

export function listUser(query) {
	return request({
		url: 'api/add',
		method: 'get',
		params: query
	})
}

export function editUser(data) {
	return request({
		url: 'api/edit',
		method: 'post',
		data: data
	})
}

export function deleteUser(data) {
	return request({
		url: 'api/delete',
		method: 'post',
		data: data
	})
}