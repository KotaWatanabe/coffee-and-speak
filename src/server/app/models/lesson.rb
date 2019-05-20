class Lesson < ApplicationRecord
  belongs_to :user
  belongs_to :teacher
  belongs_to :availability
end
