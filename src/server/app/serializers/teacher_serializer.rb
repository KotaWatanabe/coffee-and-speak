class TeacherSerializer < ActiveModel::Serializer
  attributes(
    :id,
    :price,
    :area,
    :description,
    :created_at, 
    :updated_at
  )

  belongs_to(:user, key: :teacher)

  has_many(:favourites)
  has_many(:reviews)
  has_many(:lessons)
  has_many(:availabilities)
  has_many(:teacher_languages)
end


