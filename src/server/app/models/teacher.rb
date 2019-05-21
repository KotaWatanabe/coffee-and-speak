class Teacher < ApplicationRecord
    belongs_to :user

    has_many :favourites, dependent: :destroy
    has_many :favoriters, through: :favourites, source: :user

    has_many :users, through: :favourites
    has_many :reviews, dependent: :destroy

    has_many :teacher_languages, dependent: :destroy
    has_many :languages, through: :teacher_languages


  def tag_names
    self.languages.map{ |l| l.name }.join(",")
  end

    def tag_names=(rhs)
            self.languages = rhs.strip.split(/\s*,\s*/).map do |language_name|
            Language.find_or_initialize_by(name: language_name)
        end
    end

    private

    def set_default_price
        self.price ||= 1
    end
end
