class Language < ApplicationRecord
    has_many :teacher_language, dependent: :destroy
    has_many :teachers, through: :taggings
end
