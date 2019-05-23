class TeacherCollectionSerializer < ActiveModel::Serializer
  attributes(
    :id,
    :price,
    :area,
    :description,
    :created_at, 
    :updated_at
  )

end
