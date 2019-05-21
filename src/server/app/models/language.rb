class Language < ApplicationRecord
    has_many :teacher_languages, dependent: :destroy
    has_many :teachers, through: :teacher_languages

    validates :name, presence: true, uniqueness: { case_sensitive: false }
  
    before_validation :downcase_name
  
    private
  
    def downcase_name
      self.name&.downcase!
    end
end
