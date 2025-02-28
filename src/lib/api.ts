import ky from 'ky'

export const API_URL = 'https://api.mediehuset.net'

export interface Home {
  id: string
  address: string
  zipcode: string
  city: string
  type: string
  energy_label_name: string
  price: string
  payout: string
  cost: string
  floor_space: string
  num_rooms: string
  year_construction: string
  num_clicks: string
  images: {
    id: string
    author: string
    description: string
    file: string
    is_main: string
    filename: {
      medium: string
      large: string
    }
  }[]
}

export interface StaffMember {
  email: string
  firstname: string
  id: '1'
  image: string
  lastname: string
  phone: string
  position: string
}

export const GetHomes = async (): Promise<Home[]> => {
  const response = await ky.get(`${API_URL}/homelands/homes`).json<{ items: Home[] }>()
  return response.items
}

export const GetHomeById = async (id: string): Promise<Home> => {
  const response = await ky.get(`${API_URL}/homelands/homes/${id}`).json<{ item: Home }>()
  return response.item
}

export const GetStaff = async (): Promise<StaffMember[]> => {
  const response = await ky.get(`${API_URL}/homelands/staff`).json<{ items: StaffMember[] }>()
  return response.items
}
